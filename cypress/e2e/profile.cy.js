describe('Profile', () => {
  it('should upload profile picture', {defaultCommandTimeout: 10000}, () => {
    cy.stubGqlRequest('getMyTimeline', {
      fixture: 'getMyTimeline.json',
    })
    cy.stubGqlRequest('getMyProfile', {fixture: 'getMyProfile.json'})
    cy.sessionLogin(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
    cy.wait('@getMyTimeline')

    cy.contains('Profile').click()
    cy.wait('@getMyProfile')

    cy.log('**skip for now**')
    cy.contains('Set up profile').click()
    cy.contains('.pl-1 > .rounded-full', 'Skip for now').click()

    cy.log('**upload profile picture**')
    cy.contains('Set up profile').click()
    cy.get('input[accept="image/jpeg"]').selectFile(
      './cypress/fixtures/avatar.jpeg',
      {
        action: 'select',
        force: true,
      },
    )
    cy.intercept('PUT', '*').as('upload')
    cy.contains('Next').click()
    cy.wait('@upload')
  })
})
