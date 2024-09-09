import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ImageCard from "./ImageCard";

function Text_Image() {
  return (
    <Container fluid className="about-section">
      <Particle />
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
              <strong className="purple">Text To Image Generation</strong>
            </h1>
            <ImageCard />
          </Col>
        </Row>

        <br />
        <br />
        <br />
        <br />
      </Container>
    </Container>
  );
}

export default Text_Image;