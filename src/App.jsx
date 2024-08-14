import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useState, useEffect } from "react";
import { FaMicrophone } from "react-icons/fa";
import "./App.css";
import Typewriter from "typewriter-effect";
import Navbar from "./components/Navbar";
import { chatWithGemini } from "./utils/gemini";
function App() {
  const [history, setHistory] = useState([]);
  const commands = [
    {
      command: ["Sainath", "Resume", "about", "projects", "contact"],
      callback: ({ command }) => {
        alert(`Hi there! heres the resume: "${command}"`);
      },
      matchInterim: true,
    },
  ];
  const {
    finalTranscript,
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition({ commands });
  const OnVoiceClick = () => {
    SpeechRecognition.startListening({ language: "en-IN" });
    speechSynthesis.cancel();
  };
 async function generateChatGemini(chatHistory, message) {
   setHistory((prev) => [
     ...prev,
     {
       role: "user",
       parts: [{ text: message }],
     },
     {
       role: "model",
       parts: [{ text: "loading..." }],
     },
   ]);
   try {
     const content = await chatWithGemini(chatHistory, message);
     let utterance = new SpeechSynthesisUtterance(content);
     speechSynthesis.speak(utterance);
     setHistory((prev) => {
       const newMessages = [...prev];
       newMessages[newMessages.length - 1].parts[0].text = content;
       return newMessages;
     });
   } catch (error) {
     console.error("Error calling function:", error);
     setHistory((prev) => {
       const newMessages = [...prev];
       newMessages[newMessages.length - 1].parts[0].text =
         "An error occurred. Please try again.";
       return newMessages;
     });
   }
 }
  useEffect(() => {
    const getContent = async  () => {
      if (finalTranscript) {
        //  const history = [
        //    {
        //      role: "user",
        //      parts: [{ text: "Hello" }],
        //    },
        //    {
        //      role: "model",
        //      parts: [
        //        { text: "Great to meet you. What would you like to know?" },
        //      ],
        //    },
        //  ];
        const chatHistory = {
          history: history,
          generationConfig: { maxOutputTokens: 500 },
        };
        await generateChatGemini(chatHistory, finalTranscript);
      }
    }
    getContent();
  }, [finalTranscript]);
  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat h-screen w-full flex items-center justify-center flex-col"
        style={{ backgroundColor: "#233142" }}
      >
        <Navbar finalTranscript={history} />
        <div className="text-center flex flex-row items-center justify-center text-[#e3e3e3] text-2xl">
          <a className="p-3 cursor-pointer">/about</a>
          <a className="p-3 cursor-pointer">/contact</a>
          <a className="p-3 cursor-pointer">/project</a>
          <a className="p-3 cursor-pointer">/resume</a>
        </div>
        <p className="text-[#f95959] text-7xl">Sainath Mahindrakar</p>
        <div className="text-white absolute bottom-[150px] left-[600px]">
          <img
            src={"/images/arrow.png"}
            className="fill-white w-48 rotate-[-70deg]"
          />
          <div className=" absolute bottom-[40px] left-[-100px]">
            <Typewriter
              options={{
                strings: ["Click To Speak With Me"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        {!browserSupportsSpeechRecognition && (
          <span>Browser not support speech recognition.</span>
        )}
        <button
          className="button-85 m-4"
          role="button"
          id="listenButton"
          onClick={OnVoiceClick}
        >
          {listening ? "Listening..." : <FaMicrophone fill="#000" size={17} />}
        </button>
      </div>
    </>
  );
}

export default App;
