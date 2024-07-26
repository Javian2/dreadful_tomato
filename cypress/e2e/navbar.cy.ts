describe('Basic Functionality', () => {

    beforeEach(() => {
      cy.visit('http://localhost:4200');
    })
  
    it('should navigate correctly', () => {
      cy.url().should('include', 'home')
      cy.get('main article').first().click();
      cy.url().should('include', 'movies')
      cy.go('back')
      cy.url().should('include', 'home')
      cy.go('forward')
      cy.url().should('include', 'movies')
    });

    
  });
  