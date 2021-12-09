/* eslint-disable no-undef */
describe('A user that visits the application', () => {
  before(() => {
    cy.intercept(
      'GET',
      '**/api/products',
      { fixture: "products.json"})
    .as('Products.index')
    cy.visit('/')
  })

  it('is expected to make a network call with status 200', () => {
    cy.wait('@Products.index').its('response.statusCode').should('eq', 200)
  })

  it('can see a collection of products', () => {
    cy.get('[data-cy=product-list]').children().should('have.length', 3)
  })
})
