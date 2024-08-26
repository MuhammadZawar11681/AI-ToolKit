// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
// import LoginPrompt2 from "./LoginPrompt2";

// function LoginPromp1() {
//   return (
//     <Container
//       fluid
//       className="about-section bg-gradient-to-r from-gray-800 to-gray-900 py-5"
//     >
//       <Particle />
//       <Container>
//         <Row className="justify-content-center text-center">
//           <Col
//             md={7}
//             className="animate__animated animate__fadeInUp"
//             style={{
//               paddingTop: "30px",
//               paddingBottom: "50px",
//             }}
//           >
//             <h1 className="display-4 text-white font-bold">
//               <strong className="text-purple-500">
//               Access Denied
//               </strong>
//             </h1>
//             <h2 className="text-lg text-white mt-4">
//             Please sign in to access{" "}
//               <span className="text-purple-500">this tool.</span>
//             </h2>
//           </Col>
//         </Row>

//         <Row className="justify-content-center">
//           <Col md={8}>
//             <LoginPrompt2 />
//           </Col>
//         </Row>
//       </Container>
//     </Container>
//   );
// }

// export default LoginPromp1;


import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import LoginPrompt2 from "./LoginPrompt2";

function LoginPromp1() {
  return (
    <Container fluid className="bg-dark py-5">
      
      <Container>
        <Row className="justify-content-center text-center">
          <Col
            md={7}
            className="animate__animated animate__fadeInUp"
            style={{
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 className="display-4 text-white font-weight-bold">
              <strong className="text-primary">
                Access Denied
              </strong>
            </h1>
            <h2 className="text-white mt-4">
              Please sign in to access{" "}
              <span className="text-primary">this tool.</span>
            </h2>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={8}>
            <LoginPrompt2 />
          </Col>
        </Row>
      </Container>
      <Particle />
    </Container>
  );
}

export default LoginPromp1;
