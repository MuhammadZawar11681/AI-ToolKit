import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            The integration of{" "}
            <span className="purple">Artificial Intelligence (AI) </span>
            into a comprehensive web application presents exciting opportunities
            across various domains.
            <br /> This all-in-one platform combines text-to-speech,
            speech-to-text, image generation, and video creation, benefiting
            content creators, educators, and professionals by streamlining tasks
            and enhancing accessibility. It enables users to convert content
            seamlessly across different media formats, supporting effective
            communication and interactive learning.
            <br />
            <br />
            Additionally, it encourages artistic expression and boosts workflow
            efficiency, aligning with the increasing demand for AI-driven
            applications to enhance daily life and content creation.
            <br />
            <br />
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Content Generation
            </li>
            <li className="about-activity">
              <ImPointRight /> Text to Image
            </li>
            <li className="about-activity">
              <ImPointRight /> Text To Speech
            </li>
            <li className="about-activity">
              <ImPointRight /> Speech TO Text
            </li>
            <li className="about-activity">
              <ImPointRight /> Text To Video
            </li>
          </ul>

          {/* <footer className="blockquote-footer">NULL</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
