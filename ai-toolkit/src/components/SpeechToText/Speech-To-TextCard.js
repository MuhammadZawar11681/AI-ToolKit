import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import React, { useState, useRef, useEffect } from "react";

import useClipboard from "react-use-clipboard";

import Card from "react-bootstrap/Card";
import "./SpeechToText.css";

// import SpeechRecognition from 'react-speech-recognition';
import axios from "axios";
const KEY = process.env.REACT_APP_OPENAI_API;
const model = "whisper-1"

const SpeechToTextCard = () => {
  
  const [textToCopy, setTextToCopy] = useState();
  const [isCopied, setCopied] = useClipboard(textToCopy, {
    successDuration: 1000,
  });



  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();


  const inputRef = useRef();
  const [file, setFile] = useState();
  const [response, setResponse] = useState();
  const onChangeFile = () => {
    setFile(inputRef.current.files[0]);
  }
  useEffect(() => {
    const fetchAudioFile = async () => {
      if (!file) {
        return;
      }

      const formData = new FormData();
      formData.append("model", model);
      formData.append("file", file);

      axios
        .post("https://api.openai.com/v1/audio/transcriptions ", formData, {
          headers: {
            "content-type": "multipart/form-data",
            Authorization: `Bearer ${KEY}`,

          },
        })
        .then((res) => {
          console.log(res.data);
          setResponse(res.data)
        })
        .catch((err) => {
          console.log(err);
        })
    };
    fetchAudioFile();

  }, [file]);





  if (!browserSupportsSpeechRecognition) {
    return null;
  };


  return (

    <div className="parent">




      <Card className="quote-card-view h-600 main-container" >
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
            <div className="main-container">


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
              <div className="file-container">
                <h1>
                  upload audio file to convert it to speech!

                  <input type="file"
                    ref={inputRef}
                    accept=".mp3"
                    onChange={onChangeFile}
                    style={{ display: "block", marginTop: "20px" }} />

                  {response && <div>{JSON.stringify(response, null, 2)} </div>}



                </h1>
              </div>


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
          </>
        </Card.Body>
      </Card>

    </div>

  );
};

export default SpeechToTextCard;
