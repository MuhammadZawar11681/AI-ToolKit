import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
// import TextToSpeechCard from "./Text-to-SpeechCard";
import SpeechToTextCard from "./Speech-To-TextCard";

function SpeechToText() {
  return (
    <Container fluid className="about-section">
      {/* <Particle /> */}
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple">Speech To Text Conversion</strong>
            </h1>
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
