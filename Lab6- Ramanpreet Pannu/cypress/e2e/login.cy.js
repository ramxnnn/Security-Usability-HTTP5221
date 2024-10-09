// Test to complete the form
describe("Login Form - Complete the Form", () => {
  it("fills in the username and password", () => {
    cy.visit("../lab2.html");

    cy.get("#username").type("User");
    cy.get("#password").type("Password");

    cy.get("#username").should("have.value", "User");
    cy.get("#password").should("have.value", "Password");
  });
});

// Test to submit the form
describe("Login Form - Submit the Form", () => {
  it("submits the form and displays the output", () => {
    cy.visit("../lab2.html");

    cy.get("#username").type("User");
    cy.get("#password").type("Password");

    cy.get(".login__button").click();

    cy.get(".output").should("be.visible");
    cy.get(".output__user").should("contain", "User");
    cy.get(".output__pass").should("contain", "Password");
  });
});

// Test to fail
describe("Login Form - Test to Fail", () => {
  it("should fail if the username is empty", () => {
    cy.visit("../lab2.html");

    cy.get(".login__button").click();

    cy.get("#username").should("have.class", "login__txtbox_error");
    cy.focused().should("have.attr", "id", "username");
  });

    it("should fail if the password is empty", () => {
    cy.visit("../lab2.html");
    cy.get("#username").type("User");
    cy.get(".login__button").click();

    cy.get("#password").should("have.class", "login__txtbox_error");
    cy.focused().should("have.attr", "id", "password");
  });
});
