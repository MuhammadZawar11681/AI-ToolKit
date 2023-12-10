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
    <Card className="quote-card-view h-600">
      <Card.Body >
        <blockquote className="blockquote mb-0 text-center">
          <div className="container mt-3">
            <h1 className="mb-4">Conevert your Text To Image With <span className="purple">AI</span></h1>
            <p className="lead">Describe the image you want to generate below</p>
            <Form onSubmit={handleSubmit} className="row justify-content-center">
              <Form.Group controlId="formInput" className="col-8 col-md-6 mb-2">
                <Form.Control
                  type="text"
                  name="input"
                  placeholder="Type your prompt here..."
                />
              </Form.Group>
              <Button
                id="gen-btn"
                variant="primary"
                type="submit"
                disabled={loading}
                className="col-4 col-md-2 mb-2"
              >
                {loading ? (
                  <>
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    Loading...
                  </>
                ) : (
                  "Generate"
                )}
              </Button>
            </Form>
            {output && (
              <div className="text-center mt-3">
                <img src={output} alt="Generated Art" className="img-fluid mb-3" />
                <div className="mt-2">
                  <Button id="dld-btn" className="purple" onClick={handleDownload}>
                    Download
                  </Button>
                </div>
              </div>
            )}
          </div>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default AboutCard;



