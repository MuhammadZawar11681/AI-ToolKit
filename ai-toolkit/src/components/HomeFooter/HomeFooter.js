import React from "react";
import "./HomeFooter.css"; // Import the CSS file for the HomeFooter
import logo from "../../../src/Assets/logo3.png";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

const HomeFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="homefooter">
      <Container fluid>
        <Row className="text-center text-md-left">
          <Col md={4} className="mb-4 mb-md-0">
            <h3>Contact us</h3>
            <p>Send Us a Message</p>
            <form>
              <input
                type="text"
                placeholder="Full Name"
                className="form-control mb-2"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="form-control mb-2"
              />
              <textarea
                placeholder="Enter Message"
                className="form-control mb-2"
              ></textarea>
              <button className="btn btn-primary w-100">Submit</button>
            </form>
          </Col>
          <Col md={4} className="mb-4 mb-md-0">
            <h3>Sitemap</h3>
            <p>All our pages</p>
            <ul className="list-unstyled">
              <li>
                <Link to="/Tutorial" className="btn btn-link w-75 mb-2">
                  Tutorial
                </Link>
              </li>
              <li>
                <Link to="/about" className="btn btn-link w-75 mb-2">
                  About
                </Link>
              </li>
              <li>
                <Link to="/Projects" className="btn btn-link w-75 mb-2">
                  Tools
                </Link>
              </li>
              <li>
                <Link to="/contact" className="btn btn-link w-75 mb-2">
                  Contact
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={4} className="text-center">
            <div className="logo-container mb-3 d-flex align-items-center justify-content-center flex-column">
              <div className="logo">
                <img
                  src={logo}
                  alt="Logo"
                  className="img-fluid rounded-circle rotating-logo"
                />
              </div>
              <h4 className="ai-toolkit mt-2">AI TOOLKIT</h4>
              <div className="contact-info">
                <div className="email mb-2">
                  <i className="fas fa-envelope"></i> Email: aitoolkit@gmail.com
                </div>
                <div className="call">
                  <i className="fas fa-phone"></i> Call: +92-317-988-9883
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Button variant="warning" className="back-to-top" onClick={scrollToTop}>
        Back to Top
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-up ml-2"
          viewBox="0 0 16 16"
          style={{ marginLeft: "10px" }} // Adjust spacing
        >
          <path
            fillRule="evenodd"
            d="M8 12a.5.5 0 0 0 .5-.5V3.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 3.707V11.5A.5.5 0 0 0 8 12z"
          />
        </svg>
      </Button>
    </footer>
  );
};

export default HomeFooter;
