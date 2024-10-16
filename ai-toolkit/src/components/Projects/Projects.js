import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ContentGenerator from "../../Assets/Projects/ContentGenerator_2.webp";
//import ContentGenerator2 from "../../Assets/Projects/contentgenerator2.png";
import TextToImage from "../../Assets/Projects/TextToImage.png";
import TextToImage2 from "../../Assets/Projects/TextToImage2.png";
import TextToSpeech from "../../Assets/Projects/TextToSpeech.png";
import TextToSpeech2 from "../../Assets/Projects/TextToSpeech2.png";
import SpeechToText from "../../Assets/Projects/SpeechToText.png";
import TextToVideo from "../../Assets/Projects/TextToVideo.png";
import AllTools from "../../Assets/Projects/AllTools.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          AI <strong className="purple">Tools </strong>
        </h1>
        <p style={{ color: "white" }}>
          These are some of the services we are providing
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ContentGenerator}
              isBlog={false}
              title="Content Generation"
              description="Unleash the power of AI with our Content Generator. Simply provide a query, and watch as engaging, informative content is crafted for you in seconds. Perfect for blogs, articles, or creative writing needs!"
              demoLink="/ContentGeneration"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TextToImage}
              isBlog={false}
              title="Text to Image (Guest)"
              description={
                <>
                  Turn your ideas into visuals! Provide a simple prompt, and
                  this tool generates an impressive image for you. No sign-up /
                  sign-in required—just imagine, input, and see your vision come
                  to life.
                  <br />
                  <br />
                </>
              }
              demoLink="/TextToImage"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TextToImage2}
              isBlog={false}
              title="Text to Image (User)"
              description={
                <>
                  Take your prompts to the next level! Input your idea and
                  receive a high-quality, advanced image complete with a
                  detailed description. Tailored for users seeking precision and
                  premium results.
                </>
              }
              demoLink="/TextToImage2"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TextToSpeech2}
              isBlog={false}
              title="Text to Speech (Guest)"
              description={
                <>
                  Transform your written text into clear, lifelike audio. Enter
                  your text, and the tool will generate a speech version in just
                  moments. Effortless conversion, perfect for quick projects.
                  <br />
                  <br />
                </>
              }
              demoLink="/TextToSpeech1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TextToSpeech}
              isBlog={false}
              title="Text to Speech (User)"
              description={
                <>
                  For users looking for high-quality speech outputs, this tool
                  converts your text into audio with refined voice tones and
                  enhanced clarity. Choose from multiple voice styles to suit
                  your needs.
                  <br />
                  <br />
                </>
              }
              demoLink="/TextToSpeech2"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SpeechToText}
              isBlog={false}
              title="Speech to Text"
              description="Speak, and let our tool do the typing! Convert spoken words into text with high accuracy. Whether for notes, documentation, or creative brainstorming, capture every word with ease."
              // ghLink="/ "
              demoLink="/SpeechToText"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TextToVideo}
              isBlog={false}
              title="Text to Video"
              description="Create captivating videos with just a prompt! Enter your idea, and watch as it transforms into a dynamic video. Ideal for presentations, marketing, or creative content creation."
              // ghLink="/ "
              demoLink="/TextToVideo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AllTools}
              isBlog={false}
              title="Admin"
              description={
                <>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </>
              }
              // ghLink="/ "
              demoLink="/admin"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
