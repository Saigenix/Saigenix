import { GoogleGenerativeAI } from "@google/generative-ai";

const api = import.meta.env.VITE_GEMINI_API_KEY;
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
    return "An error occurred. Please try again.";
  }
}
