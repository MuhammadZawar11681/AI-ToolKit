// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// //import Particle from "../Particle";
// // import TextToSpeechCard from "./Text-to-SpeechCard";
// import SpeechToTextCard from "./Speech-To-TextCard";

// function SpeechToText() {
//   return (
//     <Container fluid className="about-section">
//       {/* <Particle /> */}
//       <Container>
//         <Row style={{ justifyContent: "center", padding: "10px" }}>
//           <Col
//             md={7}
//             style={{
//               justifyContent: "center",
//               paddingTop: "30px",
//               paddingBottom: "50px",
//             }}
//           >
//             <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
//               <strong className="purple">Speech To Text Conversion</strong>
//             </h1>
//             <SpeechToTextCard />
//           </Col>
//         </Row>

//         <br />
//         <br />
//       </Container>
//     </Container>
//   );
// }

// export default SpeechToText;

// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";

// import SpeechToTextCard from "./Speech-To-TextCard";

// function SpeechToText() {
//   return (
//     <Container fluid className="about-section">
//       <Particle />
//       <Container>
//         <Row style={{ justifyContent: "center", padding: "20px 0" }}>
//           <Col md={8}>
//             <h1
//               style={{
//                 fontSize: "2.5em",
//                 textAlign: "center",
//                 marginBottom: "30px",
//               }}
//             >
//               <strong className="purple">Speech To Text Conversion</strong>
//             </h1>
//             <SpeechToTextCard />
//           </Col>
//         </Row>
//       </Container>
//     </Container>
//   );
// }

// export default SpeechToText;



// code without changes in this file above




import Particle from "../Particle";
import React, { useState, useRef, useEffect } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import useClipboard from "react-use-clipboard";
import Card from "react-bootstrap/Card";
import axios from "axios";
import "./SpeechToText.css";

const KEY = process.env.REACT_APP_OPENAI_API;
const model = "whisper-1";

const SpeechToText = () => {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [isCopied, setCopied] = useClipboard(transcript);
  const inputRef = useRef();
  const [file, setFile] = useState();
  const [response, setResponse] = useState();

  const onChangeFile = () => {
    setFile(inputRef.current.files[0]);
  };

  useEffect(() => {
    const fetchAudioFile = async () => {
      if (!file) {
        return;
      }

      const formData = new FormData();
      formData.append("model", model);
      formData.append("file", file);

      try {
        const res = await axios.post("https://api.openai.com/v1/audio/transcriptions", formData, {
          headers: {
            "content-type": "multipart/form-data",
            Authorization: `Bearer ${KEY}`,
          },
        });
        setResponse(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAudioFile();
  }, [file]);


  return (

    <>
      <div>





        <div className="speech-to-text-container">

          <div className="speech-card main">
            <h1 className=" title">Speech To Text Conversion
            </h1>
            <div className="speech-body">
              <h1 className=" sub-title">Convert Speech To Text With AI</h1>
              <div className="content-wrapper">
                <div className="left-section">
                  <h4 className="sec-title">Real Time Conversion</h4>
                  <p className="sec-outline">Click on Start listening to convert your own audio into text in real time:</p>

                  <div className="text-box">
                    <p className="transcript-text">{transcript}</p>
                  </div>
                  <div className="button-container">

                    <button className="s-t-t-btn" onClick={() => SpeechRecognition.startListening({ continuous: true })}>
                      Start Listening
                    </button>
                    <button className="s-t-t-btn" onClick={() => SpeechRecognition.stopListening()}>
                      Stop Listening
                    </button>
                    <button className="s-t-t-btn" onClick={resetTranscript}>
                      Clear Text
                    </button>
                    <button className="s-t-t-btn" onClick={setCopied}>
                      {isCopied ? "Copied! 👍" : "Copy?"}
                    </button>
                  </div>
                </div>
                <div className="right-section">
                  <h4 className="sec-title">Audio File Conversion</h4>
                  <p className="sec-outline">Click on Choose file to Upload an MP3 file and convert it into text:</p>
                  <div className="file-upload-container">

                    <input className="s-t-t-btn" type="file" ref={inputRef} accept=".mp3" onChange={onChangeFile} />
                    {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </>
  );
}

export default SpeechToText;