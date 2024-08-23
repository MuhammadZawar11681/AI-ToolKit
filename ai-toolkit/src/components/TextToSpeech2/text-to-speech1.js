// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
// import TextToSpeech2 from "./text-to-speech2";
// //import TextToSpeechCard from "./Text-to-SpeechCard";

// function TextToSpeech() {
//   return (
//     <Container fluid className="about-section">
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
//               <strong className="purple">Text To Speech Conversion</strong>
//             </h1>
//             <h2 className="mb-4">
//               Convert your Text To Speech With{" "}
//               <span className="purple">AI</span>
//             </h2>
//           </Col>
//           <TextToSpeech2 />
//         </Row>

//         <br />
//         <br />
//       </Container>
//       <Particle />
//     </Container>
//   );
// }

// export default TextToSpeech;


import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import TextToSpeech2 from "./text-to-speech2";

function TextToSpeech() {
  return (
    <Container fluid className="about-section bg-gradient-to-r from-gray-800 to-gray-900 py-5">
      <Particle />
      <Container>
        <Row className="justify-content-center text-center">
          <Col
            md={7}
            className="animate__animated animate__fadeInUp"
            style={{
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 className="display-4 text-white font-bold">
              <strong className="text-purple-500">Text To Speech Conversion</strong>
            </h1>
            <h2 className="text-lg text-white mt-4">
              Convert your Text To Speech With{" "}
              <span className="text-purple-500">AI</span>
            </h2>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={8}>
            <TextToSpeech2 />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default TextToSpeech;
