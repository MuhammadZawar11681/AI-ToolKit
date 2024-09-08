import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import HomeFooter from "../HomeFooter/HomeFooter";
import ImageSlider from "../imageSlider";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 5 }} className="heading">
                Welcome To!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                <strong className="main-name">' AI TOOLKIT'</strong>
              </h1>

              <div style={{ padding: 5, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20, textAlign: "right" }}>
              <div className="image-slider-container">
                <ImageSlider />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <HomeFooter />
    </section>
  );
}

export default Home;
