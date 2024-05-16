import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import TextToSpeechCard from "./ContactUs";

function Contact() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "20 px 0" }}>
          <Col
            md={10}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple">Contact Us</strong>
            </h1>
            <h5 className="mb-4">
              LET'S CONNECT: WE'RE HERE TO HELP, AND WE'D LOVE TO HEAR FROM YOU!
              WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT, YOU
              CAN REACH OUT TO US THROUGH THE CONTACT FROM OF THIS PAGE, OR BY
              PHONE, EMAIL, OR SOCIAL MEDIA.{" "}
              <span className="purple">Contact</span>
              <TextToSpeechCard />
            </h5>
          </Col>
        </Row>

        <br />
        <br />
      </Container>
      <Particle />
    </Container>
  );
}

export default Contact;
