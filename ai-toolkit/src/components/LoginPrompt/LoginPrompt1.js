import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import LoginPrompt2 from "./LoginPrompt2";

function LoginPromp1() {
  return (
    <Container fluid className="py-5">
      <Container>
        <Row className="justify-content-center text-center">
          <Col
            md={7}
            className="animate__animated animate__slideInDown"
            style={{
              paddingTop: "90px",
              paddingBottom: "50px",
            }}
          ></Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={8}>
            <LoginPrompt2 />
          </Col>
        </Row>
      </Container>
      <Particle />
    </Container>
  );
}

export default LoginPromp1;
