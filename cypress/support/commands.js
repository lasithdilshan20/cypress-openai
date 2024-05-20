const { getChatGPTResponse } = require('../../src/index');

Cypress.Commands.add('chatgpt', (prompt) => {
    console.log('Custom command called with prompt:', prompt);
    return getChatGPTResponse(prompt).then(response => {
        console.log('Response received in custom command:', response);
        return response;
    }).catch(error => {
        console.error('Error in custom command:', error);
        throw error;  // Ensure the error is propagated to Cypress
    });
});