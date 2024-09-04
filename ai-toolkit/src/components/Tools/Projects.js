import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ContentGenerator from "../../Assets/Projects/ContentGenerator_2.webp";
import TextToImage from "../../Assets/Projects/TextToImage.png";
import TextToSpeech from "../../Assets/Projects/TextToSpeech.png";
import SpeechToText from "../../Assets/Projects/SpeechToText.png";
import TextToVideo from "../../Assets/Projects/TextToVideo.png";
import AllTools from "../../Assets/Projects/AllTools.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Our AI <strong className="purple">Tools </strong>
        </h1>
        <p style={{ color: "white" }}>
          These are some of the services we are providing:
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ContentGenerator}
              isBlog={false}
              title="Content Generation"
              // description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              // ghLink=" "
              demoLink="/ContentGeneration"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TextToImage}
              isBlog={false}
              title="Text To Image"
              // description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              //  ghLink=" "
              demoLink="/TextToImage2"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TextToSpeech}
              isBlog={false}
              title="Text to speech"
              // description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              // ghLink=" "
              demoLink="/TextToSpeech2"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SpeechToText}
              isBlog={false}
              title="Speech to Text"
              // description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              // ghLink=" "
              demoLink="/SpeechToText"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TextToVideo}
              isBlog={false}
              title="Text To Vedio"
              // description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              //ghLink=" "
              demoLink="/TextToVideo" //<--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AllTools}
              isBlog={false}
              title="More.."
              // description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              // Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              // ghLink=" "
              demoLink="/Projects" // <--------Please include a demo link here
            />
          </Col>
        </Row>

        {/* <Link to="/about">AHome</Link> */}
      </Container>
    </Container>
  );
}

export default Projects;
