const { defineConfig } = require('cypress');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Pass all env variables from process.env to Cypress config
      config.env.OPENAI_API_KEY = process.env.OPENAI_API_KEY;

      // Add custom task for logging
      on('task', {
        log(message) {
          console.log(message);
          return null;
        }
      });

      return config;
    }
  }
});
