// import React, { useState } from "react";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import Container from "react-bootstrap/Container";
// // import logo from "../Assets/logo.png";
// import logo3 from "../Assets/logo3.png";
// import { Link } from "react-router-dom";
// import {
//   AiOutlineHome,
//   AiOutlineFundProjectionScreen,
//   AiOutlineUser,
// } from "react-icons/ai";
// import { CgFileDocument } from "react-icons/cg";

// function NavBar() {
//   const [expand, updateExpanded] = useState(false);
//   const [navColour, updateNavbar] = useState(false);

//   function scrollHandler() {
//     if (window.scrollY >= 20) {
//       updateNavbar(true);
//     } else {
//       updateNavbar(false);
//     }
//   }

//   window.addEventListener("scroll", scrollHandler);

//   return (
//     <Navbar
//       expanded={expand}
//       fixed="top"
//       expand="md"
//       className={navColour ? "sticky" : "navbar"}
//     >
//       <Container>
//         <Navbar.Brand href="/" className="d-flex">
//           <img src={logo3} className="img-fluid logo" alt="brand" />
//         </Navbar.Brand>
//         <Navbar.Toggle
//           aria-controls="responsive-navbar-nav"
//           onClick={() => {
//             updateExpanded(expand ? false : "expanded");
//           }}
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </Navbar.Toggle>
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="ms-auto" defaultActiveKey="#home">
//             <Nav.Item>
//               <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
//                 <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
//               </Nav.Link>
//             </Nav.Item>

//             <Nav.Item>
//               <Nav.Link
//                 as={Link}
//                 to="/about"
//                 onClick={() => updateExpanded(false)}
//               >
//                 <AiOutlineUser style={{ marginBottom: "2px" }} /> About
//               </Nav.Link>
//             </Nav.Item>

//             {/* Tools dropdown */}
//             <NavDropdown
//               title={
//                 <span>
//                   <AiOutlineFundProjectionScreen
//                     style={{ marginBottom: "2px" }}
//                   />{" "}
//                   Tools
//                 </span>
//               }
//               id="basic-nav-dropdown"
//             >
//               <NavDropdown.Item
//                 as={Link}
//                 to="/ContentGeneration"
//                 onClick={() => updateExpanded(false)}
//               >
//                 Content Generation
//               </NavDropdown.Item>
//               <NavDropdown.Item
//                 as={Link}
//                 to="/TextToImage"
//                 onClick={() => updateExpanded(false)}
//               >
//                 Text To Image
//               </NavDropdown.Item>
//               {/* changes by yushaa */}

//               <NavDropdown.Item
//                 as={Link}
//                 to="/TextToSpeech"
//                 onClick={() => updateExpanded(false)}
//               >
//                 Text To Speech
//               </NavDropdown.Item>
//               <NavDropdown.Item
//                 as={Link}
//                 to="/SpeechToText"
//                 onClick={() => updateExpanded(false)}
//               >
//                 Speech To Text
//               </NavDropdown.Item>
//               <NavDropdown.Item
//                 as={Link}
//                 to="/TextToVideo"
//                 onClick={() => updateExpanded(false)}
//               >
//                 Text To Video
//               </NavDropdown.Item>
//               <NavDropdown.Item
//                 as={Link}
//                 to="/project"
//                 onClick={() => updateExpanded(false)}
//               >
//                 More...
//               </NavDropdown.Item>
//             </NavDropdown>

//             <Nav.Item>
//               <Nav.Link
//                 as={Link}
//                 to="/contact"
//                 onClick={() => updateExpanded(false)}
//               >
//                 <CgFileDocument style={{ marginBottom: "2px" }} /> Contact Us
//               </Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link
//                 as={Link}
//                 to="/Signup"
//                 onClick={() => updateExpanded(false)}
//               >
//                 <AiOutlineUser style={{ marginBottom: "2px" }} /> Login
//               </Nav.Link>
//             </Nav.Item>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavBar;

import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import logo3 from "../Assets/logo3.png";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo3} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            {/* Tools dropdown */}
            <NavDropdown
              title={
                <span>
                  <AiOutlineFundProjectionScreen
                    style={{ marginBottom: "2px" }}
                  />{" "}
                  Tools
                </span>
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item
                as={Link}
                to="/ContentGeneration"
                onClick={() => updateExpanded(false)}
              >
                Content Generation
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/TextToImage"
                onClick={() => updateExpanded(false)}
              >
                Text To Image
              </NavDropdown.Item>
              {/* changes by yushaa */}

              <NavDropdown.Item
                as={Link}
                to="/TextToSpeech"
                onClick={() => updateExpanded(false)}
              >
                Text To Speech
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/SpeechToText"
                onClick={() => updateExpanded(false)}
              >
                Speech To Text
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/TextToVideo"
                onClick={() => updateExpanded(false)}
              >
                Text To Video
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                More...
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Contact Us
              </Nav.Link>
            </Nav.Item>
          </Nav>

          {/* Login on the right */}
          <Nav>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/Signup"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> Login
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
