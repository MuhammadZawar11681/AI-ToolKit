// try 1 for text to image
// import React from "react";
// import Card from "react-bootstrap/Card";


// function AboutCard() {
//   return (
//     <Card className="quote-card-view">
//       <Card.Body>
//         <blockquote className="blockquote mb-0">
//           <p style={{ textAlign: "justify" }}>
//             here u add Text to image CODE

//           </p>





//           {/* <footer className="blockquote-footer">NULL</footer> */}
//         </blockquote>
//       </Card.Body>
//     </Card>
//   );
// }

// export default AboutCard;
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";

const API_TOKEN = "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";

const AboutCard = () => {
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const input = event.target.elements.input.value;
    const response = await fetch(
      "https://api-inference.huggingface.co/models/CompVis/stable-diffusion-v1-4",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_TOKEN}`,
        },
        body: JSON.stringify({ inputs: input }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to generate image");
    }

    const blob = await response.blob();
    setOutput(URL.createObjectURL(blob));
    setLoading(false);
  };

  const handleDownload = () => {
    if (output) {
      const a = document.createElement("a");
      a.href = output;
      a.download = "generated_image.png";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            here u add Text to image CODE

          </p>



          {/* <footer className="blockquote-footer">NULL</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default AboutCard;



