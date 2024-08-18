// import React, { useEffect, useCallback } from "react";
import { useSpeechRecognition } from "react-speech-recognition";

const useSpeechRecognitionWithAutoStop = () => {
  //   const commands = [
  //     {
  //       command: "*",
  //       callback: () => resetTimer(),
  //     },
  //   ];

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  //   let timer = null;

  //   const resetTimer = useCallback(() => {
  //     if (timer) clearTimeout(timer);
  //     timer = setTimeout(() => {
  //       if (listening) SpeechRecognition.stopListening();
  //     }, timeout);
  //   }, [listening, timeout]);

  //   useEffect(() => {
  //     return () => {
  //       if (timer) clearTimeout(timer);
  //     };
  //   }, []);

  return {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  };
};

export default useSpeechRecognitionWithAutoStop;
