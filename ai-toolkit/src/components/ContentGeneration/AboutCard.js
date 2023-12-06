import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          here u add content generation code
           
          </p>
          

          
          {/* <footer className="blockquote-footer">NULL</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
