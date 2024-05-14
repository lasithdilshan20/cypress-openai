describe('ChatGPT Integration', () => {
  it('should get a response from ChatGPT', () => {
    cy.task('askChatGPT', 'What is the weather like today?').then((response) => {
      cy.log(response);
      expect(response).to.include('sunny'); // Example assertion
    });
  });
});
