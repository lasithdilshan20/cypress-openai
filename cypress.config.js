require('dotenv').config();
const { defineConfig } = require('cypress');
const { OpenAIApi } = require('openai');

// Ensure environment variable is correctly loaded
console.log('OpenAI API Key:', process.env.OPENAI_API_KEY);

// Initialize the OpenAIApi client directly with the API key
const openai = new OpenAIApi({
  apiKey: process.env.OPENAI_API_KEY,
});

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        async askChatGPT(query) {
          try {
            const response = await openai.createCompletion({
              model: 'text-davinci-003',
              prompt: query,
              max_tokens: 150,
            });
            return response.data.choices[0].text.trim();
          } catch (error) {
            console.error(error);
            return null;
          }
        },
      });
    },
  },
});
