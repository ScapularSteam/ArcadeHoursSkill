/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Welcome to the Arcade skill! You can ask me about prices in the shop or the time remaining on your session. For transparancy, I am not an official hack club project, and the prices in the shop may not reflect the current price if they have been edited after the 20th of June 2024';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const HackHourIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HackHourIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Hack hour intent detected successfully!';
        
        // define hack hour url
        const apiUrl = 'https://hackhour.hackclub.com/api/clock/U06LWHNLL3B' // replace slack ID with your own
        
        // fetch time in ms from api
        

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};


// Use to get prices of shop items. Please note values are hardcoded and may not refect updates in cost. They are accurate as of 20/06/2024
const ShopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'ShopIntent';
    },
    handle(handlerInput) {
        let speakOutput = 'Shop intent detected successfully!';
        
        const item = handlerInput.requestEnvelope.request.intent.slots.item.value;
        
        
        const itemID = handlerInput.requestEnvelope.request.intent.slots.item.slotValue.resolutions.resolutionsPerAuthority[0].values[0].value.id;
        


        if (itemID === "1") {
            speakOutput = "A macbook air costs 400 tickets";
        } else if (itemID === "2") {
            speakOutput = "A meta quest 3 costs 200 tickets";
        } else if (itemID === "3") {
            speakOutput = "A bamboo labs a1 mini costs 135 tickets";
        } else if (itemID === "4") {
            speakOutput = "A prusa mini plus costs 130 tickets";
        } else if (itemID === "5") {
            speakOutput = "A framework 16 costs 400 tickets";
        } else if (itemID === "6") {
            speakOutput = "A framework 13 costs 175 tickets";
        } else if (itemID === "7") {
            speakOutput = "A framework factory seconds costs 120 tickets";
        } else if (itemID === "8") {
            speakOutput = "A logitech mechanical keyboard costs 75 tickets";
        } else if (itemID === "9") {
            speakOutput = "A flipper zero costs 70 tickets";
        } else if (itemID === "10") {
            speakOutput = "A github backpack costs 50 tickets";
        } else if (itemID === "11") {
            speakOutput = "A wacom intuos costs 25 tickets";
        } else if (itemID === "12") {
            speakOutput = "An octocat plushie costs 15 tickets";
        } else if (itemID === "13") {
            speakOutput = "github keycaps cost 15 tickets for a pack of 8";
        } else if (itemID === "14") {
            speakOutput = "A yubikey 5c costs 15 tickets";
        } else if (itemID === "15") {
            speakOutput = "A pinecil costs 14 tickets";
        } else if (itemID === "16") {
            speakOutput = "A soldering iron with solder costs 8 tickets";
        } else if (itemID === "17") {
            speakOutput = "An arcade ticket counter costs 7 tickets";
        } else if (itemID === "18") {
            speakOutput = "A multimeter costs 7 tickets";
        } else if (itemID === "19") {
            speakOutput = "A breadboard with jumper wires costs 6 tickets";
        } else if (itemID === "20") {
            speakOutput = "A logic analyser costs 5 tickets";
        } else if (itemID === "21") {
            speakOutput = "A notebook costs 5 tickets";
        } else if (itemID === "22") {
            speakOutput = "A domain for 1 year costs 4 tickets";
        } else if (itemID === "23") {
            speakOutput = "Open AI credits cost 4 tickets";
        } else if (itemID === "24") {
            speakOutput = "Stickers cost 1 ticket for 3 random stickers, or 2 tickets for 1 sticker of your choice";
        }
        
        
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
}

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'You can say hello to me! How can I help?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Goodbye!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
/* *
 * FallbackIntent triggers when a customer says something that doesn’t map to any intents in your skill
 * It must also be defined in the language model (if the locale supports it)
 * This handler can be safely added but will be ingnored in locales that do not support it yet 
 * */
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Sorry, I don\'t know about that. Please try again.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
/* *
 * SessionEndedRequest notifies that a session was ended. This handler will be triggered when a currently open 
 * session is closed for one of the following reasons: 1) The user says "exit" or "quit". 2) The user does not 
 * respond or says something that does not match an intent defined in your voice model. 3) An error occurs 
 * */
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};
/* *
 * The intent reflector is used for interaction model testing and debugging.
 * It will simply repeat the intent the user said. You can create custom handlers for your intents 
 * by defining them above, then also adding them to the request handler chain below 
 * */
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below 
 * */
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Sorry, I had trouble doing what you asked. Womp womp.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
 * */
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        HackHourIntentHandler,
        ShopIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();