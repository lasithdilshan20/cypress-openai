describe('ChatGPT Integration Test', () => {
  it('should get a response from ChatGPT', () => {
    cy.chatgpt('Write a test for a login form').then(response => {
      cy.log(response);
    });
  });
});
