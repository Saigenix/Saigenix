import React, { useState } from "react";
import Model from "./Model";
function Settings() {
  const [voice, setVoice] = useState(null);

  const handleVoiceChange = (event) => {
    const voices = window.speechSynthesis.getVoices();
    setVoice(voices.find((v) => v.name === event.target.value));
  };

  return (
    <Model
      id="settings"
      width={300}
      height={150}
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
            type="text"
            className=" border-black border-2 m-1 p-1"
            placeholder="Enter Gemini Api Key.."
          />
        </label>
        <label className="block mb-2 text-md font-medium text-white">
          Voice:
          <select
            value={voice?.name}
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
          for="default-range"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Pitch
        </label>
        <input
          id="default-range"
          type="range"
          min="0.5"
          max="2"
          step="0.1"
          class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        <label
          for="default-range"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Speed
        </label>
        <input
          id="default-range"
          type="range"
          min="0.5"
          max="2"
          step="0.1"
          class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        <label class="inline-flex items-center cursor-pointer m-1 mt-4">
          <input type="checkbox" value="" class="sr-only peer" checked />
          <div class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Dark Mode
          </span>
        </label>
      </div>
    </Model>
  );
}

export default Settings;
