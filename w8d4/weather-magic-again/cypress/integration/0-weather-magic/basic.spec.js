/// <reference types="cypress" />

describe("Basic test for Weather Magic", () => {
  it("opens up the base CRA page", () => {
    cy.visit("http://localhost:3000");

    cy.get(".Header h1").should("have.text", "Weather Magic");
  });
  it("should be able to type in the form", () => {
    cy.visit("http://localhost:3000");

    cy.get(".CityForm input").type("Montréal");
    cy.get(".CityForm button").click();
  });
});
