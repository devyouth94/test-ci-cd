describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it('should contain "Get started by ~" text', () => {
    cy.contains("Get started by editing");
  });
});
