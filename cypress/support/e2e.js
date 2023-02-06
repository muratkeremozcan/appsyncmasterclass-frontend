// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

/* eslint-disable no-undef */

Cypress.Commands.add('login', (email, password) => {
  // cy.session({email, password}, () => {
  cy.visit('/')

  const dig = () =>
    cy
      .get('amplify-authenticator.hydrated')
      .shadow()
      .find('amplify-sign-in')
      .shadow()
      .find('amplify-auth-fields')
      .shadow()

  const name = () =>
    dig()
      .find('amplify-username-field')
      .shadow()
      .find('amplify-form-field')
      .shadow()
      .find('#username')
      .should('be.enabled')

  const pw = () =>
    dig()
      .find('amplify-password-field')
      .shadow()
      .find('amplify-form-field')
      .shadow()
      .find('#password')

  name().type(email, {force: true, delay: 0})
  pw().should('not.have.attr', 'disabled')
  pw().type(password, {force: true, delay: 0}).type('{enter}')
  // })

  // return cy.visit('/')
})
