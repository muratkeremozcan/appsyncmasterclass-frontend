describe('Messages', () => {
  it('should check messages', () => {
    cy.intercept('POST', '*').as('networkCall')
    cy.sessionLogin(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
    cy.contains('Messages').click()

    Cypress._.times(7, () => cy.wait('@networkCall'))
    cy.url().should('include', '/messages')
    cy.contains('You don’t have a message selected')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.w-3\\/5 > .flex > .h-10').click()
    cy.get('.pl-12').clear('a')
    cy.get('.pl-12').type('appsync-tester2{enter}')
    cy.get(
      ':nth-child(1) > .px-4 > .ml-2 > .flex-row > .flex > .font-bold',
    ).click()
    cy.get('.pl-5').clear()

    const randomString = Cypress._.random(0, 1000000)
    cy.get('.pl-5').type(`${randomString}{enter}`)
    cy.wait('@networkCall')
    cy.contains(randomString)
  })
})
