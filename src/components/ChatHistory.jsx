import React, { useState, useEffect } from "react";
import Model from "./Model";
function ChatHistory({ finalTranscript }) {
  const [transcript, setTranscript] = useState([]);

  useEffect(() => {
    setTranscript((prev) => finalTranscript);
  }, [finalTranscript]);

  return (
    <Model
      id="transcript"
      width={400}
      height={"500vh"}
      x={0}
      y={10}
      title={"Chat History"}
    >
      {transcript.map((item, index) => {
        if (item)
          return (
            <div
              key={index}
              className=" bg-gray-900 border-2 border-pink-500 p-2"
            >
              <p className=" text-orange-500">{item?.role}:</p>
              <p className="text-green-500">{item?.parts[0].text}</p>
            </div>
          );
      })}
    </Model>
  );
}

export default ChatHistory;
