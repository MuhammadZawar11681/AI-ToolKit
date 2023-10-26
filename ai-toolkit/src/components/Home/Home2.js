import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import aboutimg from "../../Assets/aboutimage.png";
import Tools from "../Tools/Projects";

// import {
//   AiFillGithub,
//   AiOutlineTwitter,
//   AiFillInstagram,
// } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              About Our<span className="purple"> AI ToolKit </span>
            </h1>
            <p className="home-about-body">
              Artificial intelligence (AI) technology has advanced in recent
              years, making it more sophisticated and capable of performing
              complex tasks. In this modern era of technology, artificial
              intelligence has revolutionized the way we interact with various
              forms of media.
              <br />
              Many AI tools Include like
              <i>
                <b className="purple">
                  {" "}
                  Content Generation, Text to speect and Video .{" "}
                </b>
              </i>
              etc &nbsp;
              <i>
                <b className="purple">Web Technologies </b>based on the{" "}
                <b className="purple">Artificial Intelligence.</b>
              </i>
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={aboutimg} className="img-fluid abt-img" alt="avatar" />
              {/* myImg */}
            </Tilt>
          </Col>
        </Row>
        {/* <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row> */}
      </Container>
      <Tools />
    </Container>
  );
}
export default Home2;
