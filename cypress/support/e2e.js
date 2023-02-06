import './commands'
// https://medium.com/trans-it/use-cypress-to-test-aws-amplify-apps-with-authentication-c2dfcb8accab
import 'cypress-localstorage-commands'
const Auth = require('aws-amplify').Auth

const username = Cypress.env('USERNAME')
const password = Cypress.env('PASSWORD')
const userPoolId = Cypress.env('COGNITO_USER_POOL_ID')
const clientId = Cypress.env('WEB_COGNITO_USER_POOL_CLIENT_ID')

const awsconfig = {
  aws_user_pools_id: userPoolId,
  aws_user_pools_web_client_id: clientId,
}

Auth.configure(awsconfig)

Cypress.Commands.add('progLogin', () => {
  cy.then(() => Auth.signIn(username, password)).then(cognitoUser => {
    const idToken = cognitoUser.signInUserSession.idToken.jwtToken
    const accessToken = cognitoUser.signInUserSession.accessToken.jwtToken

    const makeKey = name =>
      `CognitoIdentityServiceProvider.${cognitoUser.pool.clientId}.${cognitoUser.username}.${name}`

    cy.setLocalStorage(makeKey('accessToken'), accessToken)
    cy.setLocalStorage(makeKey('idToken'), idToken)
    cy.setLocalStorage(
      `CognitoIdentityServiceProvider.${cognitoUser.pool.clientId}.LastAuthUser`,
      cognitoUser.username,
    )
  })
  cy.saveLocalStorage()
  return cy.visit('/')
})

Cypress.Commands.add('uiLogin', (email, password) => {
  cy.visit('/')

  const dig = () =>
    cy
      .get('amplify-authenticator.hydrated')
      .shadow()
      .find('amplify-sign-in')
      .shadow()

  const name = () =>
    dig()
      .find('amplify-auth-fields')
      .shadow()
      .find('amplify-username-field')
      .shadow()
      .find('amplify-form-field')
      .shadow()
      .find('#username')

  const pw = () =>
    dig()
      .find('amplify-auth-fields')
      .shadow()
      .find('amplify-password-field')
      .shadow()
      .find('amplify-form-field')
      .shadow()
      .find('#password')

  const signInBtn = () =>
    dig()
      .find('amplify-form-section')
      .shadow()
      .find('amplify-button')
      .shadow()
      .find('.button')

  name().type(email, {force: true, delay: 0})
  pw().type(password, {force: true, delay: 0, scrollBehavior: false})
  signInBtn().click({force: true, scrollBehavior: false})
})

// Cypress.Commands.add('sessionLogin', (email, password) => {
//   cy.session({email, password}, () => {
//     cy.visit('/')

//     const dig = () =>
//       cy
//         .get('amplify-authenticator.hydrated')
//         .shadow()
//         .find('amplify-sign-in')
//         .shadow()
//         .find('amplify-auth-fields')
//         .shadow()

//     const name = () =>
//       dig()
//         .find('amplify-username-field')
//         .shadow()
//         .find('amplify-form-field')
//         .shadow()
//         .find('#username')
//         .should('be.enabled')

//     const pw = () =>
//       dig()
//         .find('amplify-password-field')
//         .shadow()
//         .find('amplify-form-field')
//         .shadow()
//         .find('#password')

//     const signInBtn = () =>
//       cy
//         .get('amplify-authenticator.hydrated')
//         .shadow()
//         .find('amplify-sign-in')
//         .shadow()
//         .find('amplify-form-section')
//         .shadow()
//         .find('amplify-button')
//         .shadow()
//         .find('.button')

//     name().type(email, {force: true, delay: 0})
//     pw().type(password, {force: true, delay: 0, scrollBehavior: false})
//     signInBtn().click({force: true, scrollBehavior: false})
//   })

//   return cy.visit('/')
// })
