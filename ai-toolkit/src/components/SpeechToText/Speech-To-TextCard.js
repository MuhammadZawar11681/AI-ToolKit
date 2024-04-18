// import SpeechRecognition, {
//   useSpeechRecognition,
// } from "react-speech-recognition";

// import useClipboard from "react-use-clipboard";
// import Card from "react-bootstrap/Card";
// import "./SpeechToText.css";
// import React, { useState, useRef, useEffect } from "react";

// // import SpeechRecognition from 'react-speech-recognition';

// import axios from "axios";
// const KEY = process.env.REACT_APP_OPENAI_API;
// const model = "whisper-1";

// const SpeechToTextCard = () => {
//   const { transcript, resetTranscript } = useSpeechRecognition();
//   const [isCopied, setCopied] = useClipboard(transcript);

//   const { browserSupportsSpeechRecognition } = useSpeechRecognition();

//   const inputRef = useRef();
//   const [file, setFile] = useState();
//   const [response, setResponse] = useState();
//   const onChangeFile = () => {
//     setFile(inputRef.current.files[0]);
//   };
//   useEffect(() => {
//     const fetchAudioFile = async () => {
//       if (!file) {
//         return;
//       }

//       const formData = new FormData();
//       formData.append("model", model);
//       formData.append("file", file);

//       axios
//         .post("https://api.openai.com/v1/audio/transcriptions ", formData, {
//           headers: {
//             "content-type": "multipart/form-data",
//             Authorization: `Bearer ${KEY}`,
//           },
//         })
//         .then((res) => {
//           console.log(res.data);
//           setResponse(res.data);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     };
//     fetchAudioFile();
//   }, [file]);

//   // const inputRef = useRef();
//   // const [file, setFile] = useState();
//   // const [response, setResponse] = useState();
//   // const onChangeFile = () => {
//   //   setFile(inputRef.current.files[0]);
//   // }
//   useEffect(() => {
//     const fetchAudioFile = async () => {
//       if (!file) {
//         return;
//       }

//       const formData = new FormData();
//       formData.append("model", model);
//       formData.append("file", file);

//       axios
//         .post("https://api.openai.com/v1/audio/transcriptions ", formData, {
//           headers: {
//             "content-type": "multipart/form-data",
//             Authorization: `Bearer ${KEY}`,
//           },
//         })
//         .then((res) => {
//           console.log(res.data);
//           setResponse(res.data);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     };
//     fetchAudioFile();
//   }, [file]);

//   if (!browserSupportsSpeechRecognition) {
//     return null;
//   }

//   return (
//     <div className="parent">
//       <Card className="quote-card-view h-600">
//         <Card.Body>
//           <blockquote className="blockquote mb-0 text-center">
//             <div className="container mt-3">
//               <h1 className="mb-4">
//                 Convert your Speech To Text With{" "}
//                 <span className="purple">AI</span>
//               </h1>
//             </div>
//           </blockquote>
//           <>
//             <div className="container_SpeechToText">
//               <div className="textContainer_SpeechToText">
//                 <p>{transcript}</p>
//               </div>
//               <div className="btnContainer_SpeechToText">
//                 <button
//                   className="btn_SpeechToText"
//                   onClick={() =>
//                     SpeechRecognition.startListening({ continuous: true })
//                   }
//                 >
//                   Start Listening
//                 </button>
//                 <button
//                   className="btn_SpeechToText"
//                   onClick={() => SpeechRecognition.stopListening()}
//                 >
//                   Stop Listening
//                 </button>
//                 <button className="btn_SpeechToText" onClick={resetTranscript}>
//                   Clear Text
//                 </button>
//                 <button className="btn_SpeechToText" onClick={setCopied}>
//                   {isCopied ? "Copied! 👍" : "Copy?"}
//                 </button>
//               </div>
//             </div>
//             <div className="file-container">
//               <h1>
//                 upload audio file to convert it to speech!
//                 <input
//                   type="file"
//                   ref={inputRef}
//                   accept=".mp3"
//                   onChange={onChangeFile}
//                   style={{ display: "block", marginTop: "20px" }}
//                 />
//                 {response && <div>{JSON.stringify(response, null, 2)} </div>}
//               </h1>
//             </div>
//           </>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// };

// export default SpeechToTextCard;

import React, { useState, useRef, useEffect } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import useClipboard from "react-use-clipboard";
import Card from "react-bootstrap/Card";
import axios from "axios";
import "./SpeechToText.css";

const KEY = process.env.REACT_APP_OPENAI_API;
const model = "whisper-1";

const SpeechToTextCard = () => {
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
    <div className="speech-to-text-container">
      <Card className="speech-card">
        <Card.Body>
          <h1 className="card-title">Convert Speech To Text With AI</h1>
          <div className="content-wrapper">
            <div className="left-section">
              <div className="text-box">
                <p className="transcript-text">{transcript}</p>
              </div>
              <div className="button-container">
                <button className="btn" onClick={() => SpeechRecognition.startListening({ continuous: true })}>
                  Start Listening
                </button>
                <button className="btn" onClick={() => SpeechRecognition.stopListening()}>
                  Stop Listening
                </button>
                <button className="btn" onClick={resetTranscript}>
                  Clear Text
                </button>
                <button className="btn" onClick={setCopied}>
                  {isCopied ? "Copied! 👍" : "Copy?"}
                </button>
              </div>
            </div>
            <div className="right-section">
              <div className="file-upload-container">
                <h3>Upload an MP3 file to convert it to text:</h3>
                <input type="file" ref={inputRef} accept=".mp3" onChange={onChangeFile} />
                {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SpeechToTextCard;
