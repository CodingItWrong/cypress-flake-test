describe('Example 7', () => {
  it('fails', () => {
    cy.visit('/flickering/example7');
    cy.get('[data-cy=increment]').click();
    cy.get('[data-cy=count]').contains(28);
  });
});