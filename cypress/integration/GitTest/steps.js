import {Given, Then} from "cypress-cucumber-preprocessor/steps";

const url = "https://github.com/"

Given(/^Open git home page$/, function () {
    cy.visit(url)
});

Given(/^Verify user on git home page$/, function () {
    cy.title().should("eq", "GitHub: Where the world builds software · GitHub")
});

When(/^User type search repo by (.*)$/, function (name) {
    cy.log(name)
    cy.get("button > svg").first().click()
    cy.get("[placeholder='Search GitHub']").type(name)
    cy.get("[placeholder='Search GitHub']").type("{enter}")
});

Then(/^User verify search page title should contains (.*)$/, function (name) {
    cy.title().should('include', name)
});

Then(/^User verify search result for (.*)$/, function (name) {
    cy.get("[class='mt-n1 flex-auto']").each($resultText => {
        const text = $resultText.text().toLowerCase()
        expect(text).to.contains(name, {matchCase: false})
    })
});

Then(/^Verify error message should be displayed$/, function () {
 cy.get("h3").contains("We couldn’t find any repositories matching")
});