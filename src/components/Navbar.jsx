import React, { useEffect, useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { PiReadCvLogoFill } from "react-icons/pi";
import { FaGithub, FaRegStopCircle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useModelStore } from "../utils/store";
import Settings from "./Settings";
import ChatHistory from "./ChatHistory";
import { CustomStyles } from "../utils/config";
function Navbar({ finalTranscript }) {
  const modelStates = useModelStore((state) => ({
    transcript: state.transcript,
    settings: state.settings,
    handleClose: (id) => state.handleClose(id),
  }));
  const [update, setUpdate] = useState(false);

  return (
    <div className="flex items-center justify-between absolute top-0 right-0 p-4 m-4">
      {speechSynthesis.speaking && (
        <div className="flex">
          <img src={"./images/audio.gif"} className="w-12 mr-2 scale-[2]" />
          <button
            className="mr-2 z-10 bg-white rounded-full opacity-90 p-[1px]"
            onClick={() => {
              speechSynthesis.cancel();
              setUpdate((prev) => !prev);
            }}
          >
            <FaRegStopCircle size={30} color="red" />
          </button>
        </div>
      )}
      <button
        onClick={() => {
          modelStates.handleClose("transcript");
        }}
        className={`${CustomStyles.hover} mr-2 cursor-pointer hover:rotate-[-15deg]`}
      >
        <PiReadCvLogoFill size={30} color="#fff" />
      </button>
      <button
        onClick={() => {
          modelStates.handleClose("settings");
          // console.log("clicked", settings);
        }}
        className={`${CustomStyles.hover} hover:rotate-45`}
      >
        <IoSettingsOutline size={30} color="#fff" />
      </button>
      <a
        className={`${CustomStyles.hover} mr-2 ml-3 cursor-pointer`}
        href="https://github.com/saigenix/"
        target="_blank"
      >
        <FaGithub size={30} color={"#fff"} />
      </a>
      <a
        className={`${CustomStyles.hover} mr-2 ml-3 cursor-pointer`}
        href="https://www.linkedin.com/in/saigenix77/"
        target="_blank"
      >
        <FaLinkedin size={30} color={"#fff"} />
      </a>
      {modelStates.transcript && (
        <ChatHistory finalTranscript={finalTranscript} />
      )}
      {modelStates.settings && <Settings />}
    </div>
  );
}

export default Navbar;
