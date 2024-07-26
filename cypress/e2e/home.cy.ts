describe('Basic Functionality', () => {

    beforeEach(() => {
        cy.visit('http://localhost:4200');
    })

    it('should have movies and series images', () => {
        cy.get('.imagen').should('have.length', 2)
    })

    it('should have navbar and footer', () => {
        cy.get('app-navbar').should('exist')
        cy.get('app-footer').should('exist')
    }) 
  
    it('should hover correctly', () => {
        const moviesSection = cy.get('.view').contains('Movies').parent();
        moviesSection.should('have.css', 'opacity', '0.6')
        cy.get('main article').first().trigger('mouseenter')
        moviesSection.should('have.css', 'opacity', '1')
    });
    
  });
  