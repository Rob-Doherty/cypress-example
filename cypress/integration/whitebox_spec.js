
describe('Whitebox IT Solutions Tests', () => {
  it('should open homepage', function () {
    cy.visit('https://www.whiteboxitsolutions.com');
    cy.contains('WhiteBox');
    cy.contains('IT Solutions');
  });

  it('follow github link in menu', function () {
    cy.visit('https://www.whiteboxitsolutions.com');
    cy.contains('Github').click()
    cy.contains('Rob Doherty-Kelly');
    cy.url().should('include', 'github.com/Rob-Doherty')
  });
});
