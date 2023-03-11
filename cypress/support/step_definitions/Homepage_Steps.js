/// <reference types="cypress" />
import { Given, When } from "@badeball/cypress-cucumber-preprocessor";

const url = "https://www.jumia.com.tn/";
Given("I navigate to jumia homepage", () => {
  cy.visit(url);
});

When("I click on the popup close button", () => {
  cy.xpath("//button[@aria-label='newsletter_popup_close-cta']").click();
});

When("I type a product value pc portable msi", () => {
  cy.xpath("//input[@id='fi-q']").type("pc portable msi");
});

When("I click on the search button", () => {
  cy.xpath("//button[normalize-space()='Rechercher']").click();
});
