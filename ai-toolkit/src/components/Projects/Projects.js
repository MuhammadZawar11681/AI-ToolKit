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
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              demoLink="/ContentGeneration"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TextToImage}
              isBlog={false}
              title="Test to Image (Guest)"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              demoLink="/TextToImage"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TextToImage2}
              isBlog={false}
              title="Test to Image (User)"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              demoLink="/TextToImage2"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TextToSpeech2}
              isBlog={false}
              title="Text to Speech (Guest)"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              demoLink="/TextToSpeech1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TextToSpeech}
              isBlog={false}
              title="Text to Speech (User)"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              demoLink="/TextToSpeech2"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SpeechToText}
              isBlog={false}
              title="Speech to Text"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              // ghLink="/ "
              demoLink="/SpeechToText"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TextToVideo}
              isBlog={false}
              title="Text to Video"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              // ghLink="/ "
              demoLink="/TextToVideo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AllTools}
              isBlog={false}
              title="Admin"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
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
