import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_KEY });

// TODO: Change this if hosted on the web
// Current website root url
const url = "http://localhost:5173/"

const modelName = "gemini-1.5-flash-002"

const cache = await ai.caches.create({
    model: modelName,
    config: {
        systemInstruction: "You are an interactive help system for the image manipulation software known as Pixlr." +
            "This system is only a prototype as of now, so just give a plausible sounding explanation" +
            "You must give a brief explanation of any features the user asks about." +
            "You must attach a link to a relevant tutorial on the website following each response you give to a user's question." +
            "If their question does not fit a specific category then provide a link to the tutorial home page." +
            "Links you may attach are as follows:" +
            "Tutorial home page: " + url + "tutorials" +
            "Photo Editor Tutorial: " + url + "tutorials?page=editor" +
            "AI Image Generator Tutorial: " + url + "tutorials?page=generator",
    },
});
console.log("Cache created:", cache);

const ask = async function(input) {
    console.log(input);

    const response = await ai.models.generateContent({
        model: modelName,
        contents: input,
        config: {cachedContent: cache.name},
    });
    console.log(response.text);
}

export default ask;