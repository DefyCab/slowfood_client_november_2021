/* eslint-disable no-undef */
// Arrange - Act - Assert

describe("Clicking on a Add to order button for a specific test", () => {
  before(() => {
    cy.intercept("GET", "http://localhost:3000/api/products", {
      fixture: "products.json",
    });
    cy.intercept("POST", "http://localhost:3000/api/orders", {
      fixture: "orderCreateResponse.json",
    }).as("Orders.create");
    cy.visit("/");
    cy.get("[data-cy=product-list]")
      .children()
      .first()
      .within(() => {
        cy.get("button").click();
      });
  });

  it("is expected tp make a POST request to the API", () => {
    cy.wait("@Orders.create").its("request.method").should("eq", "POST");
  });
  it("is expected to render a message", () => {});
});
