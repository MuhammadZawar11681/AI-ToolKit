import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useState } from "react";
import useClipboard from "react-use-clipboard";
import React from "react";
import Card from "react-bootstrap/Card";
import "./SpeechToText.css";
// import SpeechRecognition from 'react-speech-recognition';

const SpeechToTextCard = () => {
  const [textToCopy, setTextToCopy] = useState();
  const [isCopied, setCopied] = useClipboard(textToCopy, {
    successDuration: 1000,
  });

  //subscribe to thapa technical for more awesome videos

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null;
  }
  return (
    <Card className="quote-card-view h-600">
      <Card.Body>
        <blockquote className="blockquote mb-0 text-center">
          <div className="container mt-3">
            <h1 className="mb-4">
              Convert your Speech To Text With{" "}
              <span className="purple">AI</span>
            </h1>
          </div>
        </blockquote>
        <>
          <div className="speech-container">
            <div
              className="speech-main-content"
              onClick={() => setTextToCopy(transcript)}
            >
              {transcript}
            </div>

            <div className="speech-btn-style">
              <button className="speech-button" onClick={setCopied}>
                {isCopied ? "Copied!" : "Copy to clipboard"}
              </button>
              <button className="speech-button" onClick={startListening}>
                Start Listening
              </button>
              <button
                className="speech-button"
                onClick={SpeechRecognition.stopListening}
              >
                Stop Listening
              </button>
            </div>
          </div>
        </>
      </Card.Body>
    </Card>
  );
};

export default SpeechToTextCard;
