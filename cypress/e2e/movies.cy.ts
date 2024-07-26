describe('Basic Functionality', () => {

  beforeEach(() => {
    cy.visit('http://localhost:4200');
  })

  it('should search correctly', () => {
    cy.get('main article').first().click();
    cy.get('.logo div').first().should('have.css', 'background-color', 'rgb(255, 0, 0)')

    const searchbar = cy.get('input[placeholder="Name"]')
    searchbar.type('Pirates');
    cy.get('.movies section').should('have.length', 1)

    searchbar.clear()
    cy.get('.movies').children().should('have.length', 10)
  });

  it('should complete correctly http request', () => {
    cy.intercept('GET', 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/data.json').as('getMovies');
    cy.get('main article:first').click();
    cy.wait('@getMovies');
    cy.get('.movies').children().should('have.length.at.least', 1);
  });
  
});
