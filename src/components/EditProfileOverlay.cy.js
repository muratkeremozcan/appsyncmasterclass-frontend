import EditProfileOverlay from './EditProfileOverlay'

describe(
  'EditProfileOverlay',
  {viewportHeight: 1400, viewportWidth: 1000},
  () => {
    it('should fill edit fields', () => {
      cy.storeMount(EditProfileOverlay, {
        propsData: {showEditProfileModal: true},
      })
      cy.contains('Edit profile')
      cy.get('.flex > :nth-child(2) > .w-full').type('a')
      cy.get(':nth-child(3) > .w-full').type('b')
      cy.get(':nth-child(4) > .w-full').type('c')
      cy.get(':nth-child(5) > .w-full').type('d')
      cy.get('.mb-24 > .w-full').type('e')
    })
  },
)
