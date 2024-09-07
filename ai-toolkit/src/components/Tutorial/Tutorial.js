import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button, ButtonGroup } from "@mui/material";
import Particle from "../Particle";
import TutorialCard from "./TutorialCard";
import "./Tutorial.css"; // Create a new CSS file for custom styles

function Tutorial() {
  const [category, setCategory] = useState("all"); // State to filter videos

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <Container
      fluid
      className="tutorial-section"
      style={{ paddingTop: "100px" }}
    >
      {" "}
      {/* Added padding-top */}
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={12} style={{ paddingBottom: "50px" }}>
            <h1
              style={{
                fontSize: "2.1em",
                paddingBottom: "20px",
                textAlign: "center",
              }}
            >
              <strong className="purple">Ai ToolKit Tutorial</strong>
            </h1>

            {/* Sidebar Filter Buttons with extra styling */}
            <div className="filter-buttons">
              <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
              >
                <Button
                  className="filter-button"
                  onClick={() => handleCategoryChange("all")}
                >
                  All
                </Button>
                <Button
                  className="filter-button"
                  onClick={() => handleCategoryChange("Content Generator")}
                >
                  Content Generator
                </Button>
                <Button
                  className="filter-button"
                  onClick={() => handleCategoryChange("Text to Image")}
                >
                  Text to Image
                </Button>
                <Button
                  className="filter-button"
                  onClick={() => handleCategoryChange("Text to Speech")}
                >
                  Text to Speech
                </Button>
                <Button
                  className="filter-button"
                  onClick={() => handleCategoryChange("Speech to Text")}
                >
                  Speech to Text
                </Button>
                <Button
                  className="filter-button"
                  onClick={() => handleCategoryChange("Text to Video")}
                >
                  Text to Video
                </Button>
              </ButtonGroup>
            </div>
          </Col>
        </Row>

        {/* Pass category as prop to filter videos */}
        <TutorialCard category={category} />
      </Container>
    </Container>
  );
}

export default Tutorial;
