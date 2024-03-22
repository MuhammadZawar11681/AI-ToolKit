import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import TextToSpeechCard from "./Text-to-SpeechCard";


function TextToSpeech() {
    return (
        <Container fluid className="about-section">

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
                            <strong className="purple">Text To Speech Conversion</strong>
                        </h1>
                        <TextToSpeechCard />
                    </Col>

                </Row>


                <br />
                <br />



            </Container>
            <Particle />

        </Container>
    );
}

export default TextToSpeech;