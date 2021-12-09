/* eslint-disable no-undef */
describe("Clicking on a Add to order button for a second product", () => {
  before(() => {
    cy.intercept("GET", "http://localhost:3000/api/products", {
      fixture: "products.json",
    });

    cy.intercept("POST", "http://localhost:3000/api/orders", {
      fixture: "orderCreateResponse.json",
    }).as("Orders.create");

    cy.intercept("PUT", "http://localhost:3000/api/orders", {
      fixture: "orderUpdateResponse.json",
    }).as("Orders.update");
    cy.visit("/");

    cy.get("[data-cy=product-list]")
      .children()
      .first()
      .within(() => {
        cy.get("button").click();
      });

    cy.get("[data-cy=product-list]")
      .children()
      .last()
      .within(() => {
        cy.get("button").click();
      });
  });
  // it('is expected to include "procduct_id in the API request', () => {
  //   cy.wait("@Orders.update")
  //     .its("request.body")
  //     .should("have.property", "product_id");
  // });

  it("is expected tp make a PUT request to the API", () => {
    cy.wait("@Orders.update").its("request.method").should("eq", "PUT");
  });

  it("is expected to render a message", () => {
    cy.get("[data-cy=message-box]").should(
      "contain",
      "Hamburger was added to your order!"
    );
  });
});
