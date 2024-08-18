import { GoogleGenerativeAI } from "@google/generative-ai";
import { useVoiceStore } from "./store";
var api = import.meta.env.VITE_GEMINI_API_KEY;

// if (useVoiceStore.getState().api_key != "") {
//   // console.log(useVoiceStore.getState().api_key);
//   if (useVoiceStore.getState().api_key == "sai") {
//     api = import.meta.env.VITE_GEMINI_API_KEY;
//   } else {
//     api = useVoiceStore.getState().api_key;
//   }
// }

const genAI = new GoogleGenerativeAI(api);
const ChatModel = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function chatWithGemini(chatHistory, message) {
  // console.log(chatHistory, message);
  try {
    const chat = ChatModel.startChat(chatHistory);
    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();
    //   console.log(text);
    return text;
  } catch (error) {
    console.log(error);
    return "To continue chatting provide Gemini Api Key in Settings.";
  }
}
