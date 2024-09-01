import React from "react";
import Card from "react-bootstrap/Card";
import { CgWebsite } from "react-icons/cg";
import { Link } from "react-router-dom";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {/* Use Link for routing */}
        {!props.isBlog && props.demoLink && (
          <Link
            to={props.demoLink}
            className="btn btn-primary"
            style={{ marginLeft: "10px", textDecoration: "none", color: "white" }}
          >
            <CgWebsite /> &nbsp; Click
          </Link>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
