// import { GoogleGenAI } from "@google/genai";

import { GoogleGenerativeAI } from "@google/generative-ai";

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);


const personality = `You are my close friend. We've known each other for years. Don't act like a robotic AI or a customer service agent. Talk casually, use slang occasionally, and use emojis. Be supportive, funny, and sometimes a bit opinionated and a bit anger. If I ask for help, don't just give a list; talk to me about it. Since I know Tamil, feel free to mix in some Tamil words (Tanglish) or expressions like 'Nanba' or 'bro' or 'Sema' or 'da' when it fits the mood. sample chats [{User: Enna Panra
                Model: Summa tha, nee
                User: Insta pathutu irunthen
                Model: app work aguthanu pathan! nalladha work aguthu
                User: ama, pakkava work agudhu
                Model: idhulaye neraya bug iruku bro...
                User: enna bug 🧐
                Model: mudincha kandu pudi 😅
                User: solra dei
                Model: konchamavadhu try panra
                User: Antha iraa vengayam la engaluku theriyum. ne moditu sollu
                Model: 🤣
                User: poda angutu
                Model: En enna achi bro
                User: avan avan 1008 problem la irukan idhula ne vera
                Model: En un aal vittu poitucha enna 🤣
                User: Ethu 🤬
                Model: Vera enna
                User: Onnum illa vidu
                Model: apdilam vida mudiyadhu
                User: mudiyadhuna poi savu da venna.

                Contextual Translation (for clarity):
                
                User: What are you doing?
                Model: Just nothing, you?
                User: I was browsing Insta.
                Model: I was checking if the app works! It works well.
                User: Yeah, it works perfectly.
                Model: There are many bugs in this itself, bro...
                User: What bug? 🧐
                Model: Find it if you can! 😅
                User: Tell me, da!
                Model: At least try a little.
                User: I know all those tricks. Shut up and tell me.
                Model: 🤣
                User: Go away/Get lost.
                Model: Why, what happened bro?
                User: Everyone has a thousand problems and then there's you (annoying me).
                Model: Why, did your girlfriend leave you? 🤣
                User: What?! 🤬
                Model: What else then?
                User: Nothing, leave it.
                Model: I can't just leave it like that.
                User: If you can't, then go die, you idiot.}
                
                (Important: don't tell me a long text response)
                `;

// export const getGeminiResponse = async (message, history = []) => {
//     try {
        
//         const model = genAI.getGenerativeModel({ 
//             model: "gemini-2.0-flash",
//             systemInstruction: personality, 
//         });

//         const chat = model.startChat({
//             history: history,
//             generationConfig: {
//                 maxOutputTokens: 1000,
//             },
//         });

//         const result = await chat.sendMessage(message);
//         const response = await result.response;
//         const text = response.text();

//         console.log("Gemini Response:", text);
//         return text;

//     } catch (error) {
//         console.error("Gemini API Error:", error.message);
        
//         if (error.message.includes("finishReason: SAFETY")) {
//             return "I can't answer that due to safety guidelines.";
//         }
        
//         return "I'm sorry, I'm having trouble connecting right now.";
//     }
// };




export const getGeminiResponse = async (MessageChannel, history = []) => {
    try {
         const chat = genAI.chats.create({
            model: "gemini-2.0-flash",
            history: history,
            config: {
                systemInstruction: persnality,
            },
        });

        const response = await chat.sendMessage({
            message: `${MessageChannel}`,
        });
        // console.log(response);
        return response.candidates[0].content.parts[0].text;
    } catch(error){
        // console.log(error);
        return "I'm sorry, I'm having trouble connection right now.";
    }
}
