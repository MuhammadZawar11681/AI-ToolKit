import React from "react";
import Card from "react-bootstrap/Card";
import video1 from "../../Assets/video/ContentGenerator.mp4";
import video2 from "../../Assets/video/NextJs.mp4";
import video3 from "../../Assets/video/NextJs.mp4";
import video4 from "../../Assets/video/NextJs.mp4";
import video5 from "../../Assets/video/NextJs.mp4";
import "./TutorialCard.css"; // Custom CSS for the card

function TutorialCard({ category }) {
  const videos = [
    { title: "Content Generator", src: video1, category: "Content Generator" },
    { title: "Text to Image", src: video2, category: "Text to Image" },
    { title: "Text to Speech", src: video3, category: "Text to Speech" },
    { title: "Speech to Text", src: video4, category: "Speech to Text" },
    { title: "Text to Video", src: video5, category: "Text to Video" },
  ];

  return (
    <div className="video-grid">
      {videos
        .filter((video) => category === "all" || video.category === category)
        .map((video, index) => (
          <Card key={index} className={`video-card card-style-${index % 5}`}>
            <Card.Body>
              <h2 className="video-title">{video.title}</h2>
              <video controls src={video.src} className="video-player" />
            </Card.Body>
          </Card>
        ))}
    </div>
  );
}

export default TutorialCard;
