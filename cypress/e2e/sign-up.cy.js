describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.items-center > .flex > .bg-blue').click()
    cy.get('.pt-5 > :nth-child(2) > .w-full').clear('a')
    cy.get('.pt-5 > :nth-child(2) > .w-full').type('a', {delay: 0})
    cy.get('.pt-5 > :nth-child(3) > .w-full').clear('a')
    cy.get('.pt-5 > :nth-child(3) > .w-full').type('a@b.gmail.com', {delay: 0})
    cy.get(':nth-child(6) > .w-full').clear('12')
    cy.get(':nth-child(6) > .w-full').type('12/12/12', {delay: 0})
    cy.get('.pl-1 > .rounded-full').click()
    cy.get('.pl-1 > .bg-blue').click()
    cy.get('.border-b-2 > .w-full').clear('12')
    cy.get('.border-b-2 > .w-full').type('123456789', {delay: 0})
    cy.get('.pt-5 > .text-blue').click()
    cy.get('.pl-1 > .bg-blue').click()
    cy.get('.pt-5 > .rounded-full').click()
    /* ==== End Cypress Studio ==== */
  })
})
