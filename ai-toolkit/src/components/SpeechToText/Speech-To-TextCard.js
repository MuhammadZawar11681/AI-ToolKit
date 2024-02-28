import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import useClipboard from "react-use-clipboard";
import React from "react";
import Card from "react-bootstrap/Card";
import "./SpeechToText.css";

// import SpeechRecognition from 'react-speech-recognition';

const SpeechToTextCard = () => {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [isCopied, setCopied] = useClipboard(transcript);

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
          <div className="container_SpeechToText">
            <div className="textContainer_SpeechToText">
              <p>{transcript}</p>
            </div>
            <div className="btnContainer_SpeechToText">
              <button
                className="btn_SpeechToText"
                onClick={() =>
                  SpeechRecognition.startListening({ continuous: true })
                }
              >
                Start Listening
              </button>
              <button
                className="btn_SpeechToText"
                onClick={() => SpeechRecognition.stopListening()}
              >
                Stop Listening
              </button>
              <button className="btn_SpeechToText" onClick={resetTranscript}>
                Clear Text
              </button>
              <button className="btn_SpeechToText" onClick={setCopied}>
                {isCopied ? "Copied! 👍" : "Copy?"}
              </button>
            </div>
          </div>
        </>
      </Card.Body>
    </Card>
  );
};

export default SpeechToTextCard;
