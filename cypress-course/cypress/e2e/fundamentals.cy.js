describe("Fundamentals Test", () => {
  it("Header has the correct text", () => {
    cy.visit("/fundamentals");
    cy.get('[data-test="fundamentals-header"]').should(
      "contain.text",
      "Testing Fundamentals",
    );
  });
});

