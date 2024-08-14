// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
// // import TextToSpeechCard from "./Text-to-SpeechCard";
// import SpeechToTextCard from "./Speech-To-TextCard";

// function SpeechToText() {
//   return (
//     <Container fluid className="about-section">
//       <Particle />
//       <Container>
//         <Row style={{ justifyContent: "center", padding: "10px" }}>
//           <Col
//             md={10}
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

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
// import TextToSpeechCard from "./Text-to-SpeechCard";
import SpeechToTextCard from "./Speech-To-TextCard";
//import "./SpeechToText";

function SpeechToText() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={11}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple">Speech To Text</strong>
            </h1>
            <h5 className="mb-4">
              Convert Speech To Text With <span className="purple">AI</span>
            </h5>
            <SpeechToTextCard />
          </Col>
        </Row>

        <br />
        <br />
      </Container>
    </Container>
  );
}

export default SpeechToText;
