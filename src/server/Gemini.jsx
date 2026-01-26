import { GoogleGenAI } from "@google/genai";

import { GoogleGenerativeAI } from "@google/generative-ai";

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenAI({apiKey:GEMINI_API_KEY});


const personality = `#########`;

export const getGeminiResponse = async (MessageChannel, history = []) => {
    try {
         const chat = genAI.chats.create({
            model: "gemini-3-flash-preview",
            history: history,
            config: {
                systemInstruction: personality,
            },
        });

        const response = await chat.sendMessage({
            message: `${MessageChannel}`,
        });
        // console.log(response);
        return response.candidates[0].content.parts[0].text;
    } catch(error){
        console.log(error);
        return "I'm sorry, I'm having trouble connection right now.";
    }
}
