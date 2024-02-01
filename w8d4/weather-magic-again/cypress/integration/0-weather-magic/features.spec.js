/// <reference types="cypress" />

describe("Features of Weather Magic", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should not show the currentWeather section on first load", () => {
    cy.get(".Header").should("exist");
    cy.get(".CurrentWeather").should("not.exist");
  });

  it("should show the current weather when a city has been fetched", () => {
    cy.get(".CurrentWeather").should("not.exist");

    cy.get(".CityForm input").type("Montréal{enter}");

    cy.get(".CurrentWeather").should("exist");
  });

  it("should not show the current weather when an invalid city has been fetched", () => {
    cy.get(".CurrentWeather").should("not.exist");

    cy.get(".CityForm input").type("Potato{enter}");

    cy.get(".CurrentWeather").should("not.exist");
  });

  it("should add a button when we search for a valid city", () => {
    cy.get(".CityForm input").type("Toronto{enter}");

    cy.get(".CityHistory").should("exist");
    cy.get(".CityHistory button").should("have.length", 1);
  });

  it("should add a button when we search for a valid city and is not already in the list", () => {
    cy.get(".CityForm input").type("Toronto{enter}");

    cy.get(".CityHistory").should("exist");
    cy.get(".CityHistory button").should("have.length", 1);

    cy.get(".CityForm input").type("Patate{enter}");
    cy.get(".CityHistory button").should("have.length", 2);

    cy.get(".CityForm input").type("Toronto{enter}");
    cy.get(".CityHistory button").should("have.length", 2);
  });
});
