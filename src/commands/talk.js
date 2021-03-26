/*const { Client } = require('discord.js');

const dialogflow = require('@google-cloud/dialogflow');
const uuid = require('uuid');

module.exports = async function talk(message) {
    const projectId = process.env.PROJECT_ID;
    const sessionId = uuid.v4();

    const sessionClient = new dialogflow.SessionsClient();
    const sessionPath = await sessionClient.projectAgentSessionPath(
    projectId,
    sessionId
    );

    const request = {
        session: sessionPath,
        queryInput: {
            text: {
            // The query to send to the dialogflow agent
            text: message,
            // The language used by the client (en-US)
            languageCode: "en-US",
            },
        },
    };

      // Send request and log result
    const responses = await sessionClient.detectIntent(request);
    const result = responses[0].queryResult;
    console.log(`Query: ${result.queryText}`);
  
    return await result.fulfillmentText;
}*/