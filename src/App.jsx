import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useState, useEffect } from "react";
import "./App.css";
import Typewriter from "typewriter-effect";
import Navbar from "./components/Navbar";
import { chatWithGemini } from "./utils/gemini";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import { useModelStore, useVoiceStore } from "./utils/store";
import { CustomStyles } from "./utils/config";
import { GrMicrophone } from "react-icons/gr";
function App() {
  const [history, setHistory] = useState([]);
  const modelStates = useModelStore((state) => ({
    about: state.about,
    contact: state.contact,
    projects: state.projects,
    resume: state.resume,
    handleClose: (id) => state.handleClose(id),
  }));
  const voiceStates = useVoiceStore((state) => ({
    voice: state.voice,
    pitch: state.pitch,
    rate: state.rate,
  }));

  const commands = [
    {
      command: [
        "sainath",
        "sainath mahindrakar",
        "resume",
        "about",
        "projects",
        "contact",
      ],
      callback: ({ command }) => modelStates.handleClose(command),
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
      utterance.voice = voiceStates.voice;
      utterance.pitch = voiceStates.pitch;
      utterance.rate = voiceStates.rate;
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
    const getContent = async () => {
      if (finalTranscript) {
        const chatHistory = {
          history: history,
          generationConfig: { maxOutputTokens: 500 },
        };
        await generateChatGemini(chatHistory, finalTranscript);
      }
    };
    getContent();
  }, [finalTranscript]);

  // future updates
  // function getRandomHexColor() {
  //   const hexCharacters = "0123456789ABCDEF";
  //   let color = "#";
  //   for (let i = 0; i < 6; i++) {
  //     color += hexCharacters[Math.floor(Math.random() * 16)];
  //   }
  //   return color;
  // }

  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat h-screen w-full flex items-center justify-center flex-col"
        style={{
          backgroundColor: "#233142",
          backgroundImage: "url(./images/bg.svg)",
        }}
      >
        <Navbar finalTranscript={history} />
        <div className="text-center flex flex-row items-center justify-center text-[#e3e3e3] text-2xl">
          <a
            className={`${CustomStyles.hover} p-3 cursor-pointer hover:text-[#8338ec]`}
            onClick={() => modelStates.handleClose("about")}
          >
            /about
          </a>
          <a
            className={`${CustomStyles.hover} p-3 cursor-pointer hover:text-[#ff006e]`}
            onClick={() => modelStates.handleClose("contact")}
          >
            /contact
          </a>
          <a
            className={`${CustomStyles.hover} p-3 cursor-pointer hover:text-[#3a86ff]`}
            onClick={() => modelStates.handleClose("projects")}
          >
            /project
          </a>
          <a
            className={`${CustomStyles.hover} p-3 cursor-pointer hover:text-[#ffbe0b]`}
            onClick={() => modelStates.handleClose("resume")}
          >
            /resume
          </a>
          {modelStates.about && <About />}
          {modelStates.contact && <Contact />}
          {modelStates.projects && <Projects />}
          {modelStates.resume && <Resume />}
        </div>
        <p className="text-7xl p-4" id="heading">
          Sainath Mahindrakar
        </p>
        <div className="text-white absolute bottom-[150px] left-[600px]">
          <img
            src={"./images/arrow.png"}
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
          className={`${CustomStyles.hover} button-85 m-4 animate-pulse`}
          role="button"
          id="listenButton"
          onClick={OnVoiceClick}
        >
          {listening ? (
            "Listening..."
          ) : (
            <GrMicrophone color="black" size={20} opacity={0.9} />
          )}
        </button>
      </div>
    </>
  );
}

export default App;
