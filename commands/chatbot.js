// commands/chatbot.js

const axios= require('axios');
require('dotenv').config();

// Replace these with your actual API endpoint and API key
const apiEndpoint = process.env.API_ENDPOINT;
const apiKey = process.env.API_KEY;

async function callApi(prompt) {
    try {
        const response = await axios.post(apiEndpoint, {
            question: prompt
        }, {
            headers: {
                'x-api-key': apiKey
            }
        });

        console.log('Response:', response.data);
        return response.data.answer; // Ensure your API responds with an object that has an 'answer' key
    } catch (error) {
        console.error('Error calling API:', error.response ? error.response.data : error.message);
        return "Sorry, I couldn't process your request.";
    }
}

module.exports = {
    name: 'chatbot',
    description: 'Call LLM to get an answer.',
    execute: async (message, args) => {
        const commandContent = args.join(' ');
        const answer = await callApi(commandContent);
        message.channel.send(`${answer}`);
    },
};
