const axios = require('axios');

// Hardcoded API Key for testing
const OPENAI_API_KEY = 'sample key here';

if (!OPENAI_API_KEY) {
    console.error('OpenAI API key is not set');
} else {
    console.log('OpenAI API key is set:', OPENAI_API_KEY);
}

async function getChatGPTResponse(prompt) {
    try {
        console.log('Calling OpenAI API with prompt:', prompt);
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: 'davinci-002', // Use the gpt-3.5-turbo model for testing
            messages: [{ role: 'user', content: prompt }],
            max_tokens: 150,
            temperature: 0.7
        }, {
            headers: {
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        console.log('Response from OpenAI:', response.data.choices[0].message.content.trim());
        return response.data.choices[0].message.content.trim();
    } catch (error) {
        console.error('Error calling OpenAI API:', error.response ? error.response.data : error.message);
        console.error('Full error response:', error.response ? JSON.stringify(error.response.data, null, 2) : error.message);
        throw error;
    }
}

module.exports = { getChatGPTResponse };
