describe("Various examples", () => {
  beforeEach(() => {
    cy.visit("/examples");
  });
  it("multi-page testing", () => {
    const navItems = [
      { dataTest: "nav-why-cypress", path: "/" },
      { dataTest: "nav-overview", path: "/overview" },
      { dataTest: "nav-fundamentals", path: "/fundamentals" },
      { dataTest: "nav-forms", path: "/forms" },
      { dataTest: "nav-examples", path: "/examples" },
      { dataTest: "nav-component", path: "/component" },
      { dataTest: "nav-best-practices", path: "/best-practices" },
    ];
    navItems.forEach((navItem) => {
      cy.getDataTest(navItem.dataTest).click();
      cy.location("pathname").should("equal", navItem.path);
    });
  });
});
