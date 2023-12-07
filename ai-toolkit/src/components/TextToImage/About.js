import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";


function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple">Text To Image Generation</strong>
            </h1>
            <Aboutcard />
          </Col>

        </Row>


        <br />
        <br />



      </Container>
    </Container>
  );
}

export default About;

// i have added text to image code below which is working correctly

// import './about.css'
// import React, { useState } from "react";

// const API_TOKEN = "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";

// const About = () => {
//   const [loading, setLoading] = useState(false);
//   const [output, setOutput] = useState(null);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);

//     const input = event.target.elements.input.value;
//     const response = await fetch(
//       "https://api-inference.huggingface.co/models/CompVis/stable-diffusion-v1-4",

//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${API_TOKEN}`,
//         },
//         body: JSON.stringify({ inputs: input }),
//       }
//     );

//     if (!response.ok) {
//       throw new Error("Failed to generate image");
//     }

//     const blob = await response.blob();
//     setOutput(URL.createObjectURL(blob));
//     setLoading(false);
//   };

//   const handleDownload = () => {
//     if (output) {
//       const a = document.createElement("a");
//       a.href = output;
//       a.download = "generated_image.png";
//       document.body.appendChild(a);
//       a.click();
//       document.body.removeChild(a);
//     }
//   };

//   return (
//     <div className="container al-c mt-3">
//       <h1>Text To <span>Image</span></h1>
//       <p>Describe the image you want to generate in the box below</p>
//       <form className="gen-form" onSubmit={handleSubmit}>
//         <input type="text" name="input" placeholder="type your prompt here..." />
//         <button id='gen-btn' type="submit">Generate</button>
//       </form>
//       <div>
//         {loading && <div className="loading">Loading...</div>}
//         {!loading && output && (
//           <div className="result-image">
//             <img src={output} alt="art" />
//             <button id='dld-btn' onClick={handleDownload}>Download</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default About;
