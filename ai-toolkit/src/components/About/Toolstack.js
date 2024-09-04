// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import {
//   SiVisualstudiocode,
//   SiPostman,
//   SiSlack,
//   SiVercel,
//   SiMacos,
// } from "react-icons/si";

// function Toolstack() {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiMacos />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiVisualstudiocode />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiPostman />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiSlack />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiVercel />
//       </Col>
//     </Row>
//   );
// }

// export default Toolstack;

import React from "react";
import './Toolstack.css'; // Import your custom CSS for styling

function Toolstack() {
  return (
    <div className="toolstack-container">
      <div className="scrolling-wrapper">
        <div className="scrolling-text">
          <div className="scroll-item">Content Generator</div>
          <div className="scroll-item">Text to Image</div>
          <div className="scroll-item">Text to Speech</div>
          <div className="scroll-item">Speech to Text</div>
          <div className="scroll-item">Text to Video</div>
        </div>
      </div>
    </div>
  );
}

export default Toolstack;
