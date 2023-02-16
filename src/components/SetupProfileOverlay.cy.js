import SetupProfileOverlay from './SetupProfileOverlay'

describe(
  'SetupProfileOverlay',
  {viewportHeight: 1400, viewportWidth: 1000},
  () => {
    it('should fill edit fields', () => {
      cy.storeMount(SetupProfileOverlay, {
        propsData: {showEditProfileModal: true},
      })
      cy.contains('Pick a profile picture')
    })
  },
)
