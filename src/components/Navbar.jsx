import React, { useEffect, useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { PiReadCvLogoFill } from "react-icons/pi";
import Model from "./Model";

function Navbar({ finalTranscript }) {
  const [clicked, setClicked] = useState(false);
  const [settings, setSettings] = useState(false);
  const [transcript, setTranscript] = useState([]);
  useEffect(() => {
    setTranscript((prev) => finalTranscript);
  }, [finalTranscript]);
  return (
    <div className="flex items-center justify-between absolute top-0 right-0 p-4 m-4">
      <button onClick={() => setClicked((prev) => !prev)} className="mr-2">
        <PiReadCvLogoFill size={30} color="#fff" />
      </button>
      <button onClick={() => setSettings((prev) => !prev)}>
        <IoSettingsOutline size={30} color="#fff" />
      </button>
      {clicked && (
        <Model width={500} height={200} x={850} y={30}>
          {transcript.map((item, index) => {
            if (item)
              return (
                <div
                  key={index}
                  className=" bg-gray-900 border-2 border-pink-500 p-2"
                >
                  <p className=" text-orange-500">
                    {item?.role}:
                  </p>
                  <p className="text-green-500">{item?.parts[0].text}</p>
                </div>
              );

          })}
        </Model>
      )}
      {settings && (
        <Model width={300} height={150} x={"right"} y={100}>
          {" "}
          <p>Settings</p>{" "}
        </Model>
      )}
    </div>
  );
}

export default Navbar;
