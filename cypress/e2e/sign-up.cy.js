describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    const nodelay = {delay: 0}
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.items-center > .flex > .bg-blue').click()
    cy.get('.pt-5 > :nth-child(2) > .w-full').clear('a')
    cy.get('.pt-5 > :nth-child(2) > .w-full').type('a', nodelay)
    cy.get('.pt-5 > :nth-child(3) > .w-full').clear('a')
    cy.get('.pt-5 > :nth-child(3) > .w-full').type('a@b.gmail.com', nodelay)
    cy.get(':nth-child(6) > .w-full').clear('12')
    cy.get(':nth-child(6) > .w-full').type('12/12/12', nodelay)
    cy.get('.pl-1 > .rounded-full').click()
    cy.get('.pl-1 > .bg-blue').click()
    cy.get('.pt-5 > .text-blue').click()
    cy.get('.pt-5 > .border-b-2 > .w-full').type('abcd1234', nodelay)
    cy.get('.pl-1 > .bg-blue').click()
    cy.contains('Step 4 of 5')
  })
})
