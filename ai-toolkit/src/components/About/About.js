import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Slider from "./LogoSlider";
import FAQs from "../FAQS/FAQs";
function About() {
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
              Know About <strong className="purple">AI ToolKit</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
            {/* about image resourse */}
          </Col>
        </Row>
        <br />
        <br />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> We Provide
        </h1>
        <Toolstack />
        <Slider />
        <FAQs />

      </Container>
    </Container>
  );
}

export default About;
