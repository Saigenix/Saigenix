import React, { useState, useEffect } from "react";
import Model from "./Model";
import { useVoiceStore } from "../utils/store";

function Settings() {
  const voiceStates = useVoiceStore((state) => ({
    voice: state.voice,
    pitch: state.pitch,
    rate: state.rate,
    api_key: state.api_key,
    setApi_key: (key) => state.setApi_key(key),
    setVoice: (voice) => state.setVoice(voice),
    setPitch: (pitch) => state.setPitch(pitch),
    setRate: (rate) => state.setRate(rate),
  }));

    // useEffect(() => {
    //   const synth = speechSynthesis;
    //   // Add an event listener to the speechSynthesis object to listen for the voiceschanged event
    //   synth.addEventListener("voiceschanged", () => {
    //     const voices = synth.getVoices();
    //     voiceStates.setVoice(voices[0]);
    //   });

    //   return () => {
    //     synth.removeEventListener("voiceschanged", () => {
    //       voiceStates.setVoice(null);
    //     });
    //   };
    // }, []);

  const handleVoiceChange = (event) => {
    const voices = speechSynthesis.getVoices();
    // console.log(voices);
    voiceStates.setVoice(voices.find((v) => v.name === event.target.value));
  };

  const handlePitchChange = (event) => {
    voiceStates.setPitch(parseFloat(event.target.value));
  };

  const handleRateChange = (event) => {
    voiceStates.setRate(parseFloat(event.target.value));
  };
  return (
    <Model
      id="settings"
      width={500}
      height={350}
      x={"right"}
      y={100}
      title={"Settings"}
    >
      <div className="bg-[#455d7a] text-black flex flex-col p-3">
        <h3 className="text-center text-white text-lg font-bold">Settings</h3>

        <label className="block mb-2 text-md font-medium text-white">
          Gemini Api Key:
          <br />
          <input
            type="password"
            value={voiceStates.api_key}
            className="border-black border-2 m-1 p-1 text-black"
            placeholder="Enter Gemini Api Key.."
            onChange={(e) => voiceStates.setApi_key(e.target.value)}
          />
        </label>
        <label className="block mb-2 text-md font-medium text-white">
          Voice:
          <select
            value={voiceStates.voice?.name}
            onChange={handleVoiceChange}
            className=" bg-[#233142] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {speechSynthesis.getVoices().map((voice) => (
              <option key={voice.name} value={voice.name}>
                {voice.name}
              </option>
            ))}
          </select>
        </label>
        <label

          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Pitch
        </label>
        <input
          id="default-range"
          type="range"
          min="0.5"
          max="2"
          step="0.1"
          value={voiceStates.pitch}
          onChange={handlePitchChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Speed
        </label>
        <input
          id="default-range"
          type="range"
          min="0.5"
          max="2"
          step="0.1"
          value={voiceStates.rate}
          onChange={handleRateChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        <label className="inline-flex items-center cursor-pointer m-1 mt-4">
          <input type="checkbox" value={true} className="sr-only peer" defaultChecked/>
          <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Dark Mode
          </span>
        </label>
      </div>
    </Model>
  );
}

export default Settings;
