import './commands'
import 'cypress-localstorage-commands'
import 'cypress-data-session'

Cypress.Commands.add('uiLogin', (email, password) => {
  cy.visit('/')

  cy.intercept('POST', 'https://cognito-idp.eu-west-1.amazonaws.com').as(
    'cognito',
  )
  cy.get('.w-1\\/2 > :nth-child(1) > .bg-lightblue')
    .clear()
    .type(email, {delay: 0})
  cy.get(':nth-child(2) > .bg-lightblue').clear().type(password, {delay: 0})
  cy.get('.self-center > .font-bold').click()

  Cypress._.times(2, () =>
    cy.wait('@cognito').its('response.statusCode').should('eq', 200),
  )

  return cy.contains('Home', {timeout: 10000})
})

const validateLocalStorage = localStorage =>
  Cypress._.some(localStorage, (value, key) =>
    key.includes('CognitoIdentityServiceProvider'),
  )

Cypress.Commands.add('sessionLogin', (email, password) => {
  cy.session({email, password}, () => cy.uiLogin(email, password), {
    validate: () => cy.getAllLocalStorage().should(validateLocalStorage),
    cacheAcrossSpecs: true,
  })
  return cy.visit('/home')
})

// AWS amplify prog login example, worth keeping around
// https://medium.com/trans-it/use-cypress-to-test-aws-amplify-apps-with-authentication-c2dfcb8accab
// we use the amplify Auth class to create a session for our user. This command returns a CognitoUser.
const Auth = require('aws-amplify').Auth
Auth.configure({
  aws_user_pools_id: Cypress.env('COGNITO_USER_POOL_ID'),
  aws_user_pools_web_client_id: Cypress.env('WEB_COGNITO_USER_POOL_CLIENT_ID'),
})

Cypress.Commands.add('progLogin', (username, password) => {
  // the Auth.singIn() command needs to be wrapped in cy.then() because of the way cypress handles promises
  cy.then(() => Auth.signIn(username, password)).then(cognitoUser => {
    // extract the idToken and accessToken from the cognitoUser
    const idToken = cognitoUser.signInUserSession.idToken.jwtToken
    const accessToken = cognitoUser.signInUserSession.accessToken.jwtToken
    // the cognito credentials need to have a specific format, hence the makeKey function
    const makeKey = name =>
      `CognitoIdentityServiceProvider.${cognitoUser.pool.clientId}.${cognitoUser.username}.${name}`

    // use cy.setLocalStorage to save the credentials to localStorage
    cy.setLocalStorage(makeKey('accessToken'), accessToken)
    cy.setLocalStorage(makeKey('idToken'), idToken)
    cy.setLocalStorage(
      `CognitoIdentityServiceProvider.${cognitoUser.pool.clientId}.LastAuthUser`,
      cognitoUser.username,
    )
  })
  cy.saveLocalStorage()
  return cy.visit('/home').then(() => JSON.parse(JSON.stringify(localStorage)))
})

Cypress.Commands.add('dataSessionLogin', (email, password) => {
  return cy.dataSession({
    name: email,
    setup: () => cy.progLogin(email, password),
    validate: validateLocalStorage,
    recreate: ls => {
      for (const key in ls) {
        localStorage[key] = ls[key]
      }
      cy.visit('/home')
      return cy.contains('Home', {timeout: 10000})
    },
    cacheAcrossSpecs: true,
  })
})

Cypress.Commands.add('stubGqlRequest', (request, reply) => {
  cy.intercept('POST', Cypress.env('API_URL'), req => {
    if (
      req.body.query?.includes(request) ||
      req.body.mutation?.includes(request)
    ) {
      req.alias = `${request}`
      return req.reply(reply)
    }
  }).as('gql-stub')
})

// AWS amplify shadow dom example, worth keeping around
// would have been easier with includeShadowDom https://docs.cypress.io/guides/references/legacy-configuration#Options
// Cypress.Commands.add('uiLogin', (email, password) => {
//   cy.visit('/')

//   const dig = () =>
//     cy
//       .get('amplify-authenticator.hydrated')
//       .shadow()
//       .find('amplify-sign-in')
//       .shadow()

//   const name = () =>
//     dig()
//       .find('amplify-auth-fields')
//       .shadow()
//       .find('amplify-username-field')
//       .shadow()
//       .find('amplify-form-field')
//       .shadow()
//       .find('#username')

//   const pw = () =>
//     dig()
//       .find('amplify-auth-fields')
//       .shadow()
//       .find('amplify-password-field')
//       .shadow()
//       .find('amplify-form-field')
//       .shadow()
//       .find('#password')

//   const signInBtn = () =>
//     dig()
//       .find('amplify-form-section')
//       .shadow()
//       .find('amplify-button')
//       .shadow()
//       .find('.button')

//   name().type(email, {force: true, delay: 0})
//   pw().type(password, {force: true, delay: 0, scrollBehavior: false})
//   signInBtn().click({force: true, scrollBehavior: false})
// })
