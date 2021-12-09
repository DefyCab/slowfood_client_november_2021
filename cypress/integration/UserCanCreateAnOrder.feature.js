describe('Clicking on a Add to order button for a specific test', () => {
  before(() => {
    cy.intercept('GET', 'http://localhost:3000/api/products', {
      fixture: 'products.json',
    })
    cy.visit('/')
  })
  cy.intercept('POST', 'http://localhost:3000/api/orders', {
    fixture: 'orderCreateResponse.json',
  }).as('Orders,create')

  it('is expac make a POST request to the API', () => {})
  cy.wait('@Orders.create').its('request.method').should('eq', 'POST')

  it('is expected to render a message', () => {})
})
