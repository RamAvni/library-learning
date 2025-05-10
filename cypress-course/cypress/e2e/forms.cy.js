describe("form tests", () => {
  beforeEach(() => {
    cy.visit("/forms");
    cy.getDataTest("subscribe-form").as("subscribe-input");
  });

  it("should succeed on correct credentials", () => {
    cy.contains(/testing forms/i);
    cy.get("@subscribe-input").type("ryan@coderyan.com");
    cy.contains(/Successfully subbed: ryan@coderyan.com!/i).should("not.exist");
    cy.getDataTest("subscribe-button").click();
    cy.contains(/Successfully subbed: ryan@coderyan.com!/i).should("exist");
    cy.wait(3000);
    cy.contains(/Successfully subbed: ryan@coderyan.com!/i).should("not.exist");
  });

  it("should fail on entering incorrect email", () => {
    cy.get("@subscribe-input").type("ryan@coderyan.io");
    cy.contains(/Invalid Email: ryan@coderyan.io!/i).should("not.exist");
    cy.getDataTest("subscribe-button").click();
    cy.contains(/Invalid Email: ryan@coderyan.io!/i).should("exist");
    cy.wait(3000);
    cy.contains(/Successfully subbed: ryan@coderyan.com!/i).should("not.exist");
  });

  it("should fail on empty form", () => {
    cy.contains(/fail!/i).should("not.exist");
    cy.getDataTest("subscribe-button").click();
    cy.contains(/fail!/i).should("exist");
  });
});
