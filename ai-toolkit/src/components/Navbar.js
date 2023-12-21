// import React, { useState } from "react";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import Container from "react-bootstrap/Container";
// import logo from "../Assets/logo.png";
// // import Button from "react-bootstrap/Button";
// import { Link } from "react-router-dom";
// // import { CgGitFork } from "react-icons/cg";
// // import { ImBlog } from "react-icons/im";
// import {
//   // AiFillStar,
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
//           <img src={logo} className="img-fluid logo" alt="brand" />
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
//                 to="/about" // here you put path of about us /path
//                 onClick={() => updateExpanded(false)}
//               >
//                 <AiOutlineUser style={{ marginBottom: "2px" }} /> About
//               </Nav.Link>
//             </Nav.Item>

//             <Nav.Item>
//               <Nav.Link
//                 as={Link}
//                 to="/Projects " // here you put path of contact us /path
//                 onClick={() => updateExpanded(false)}
//               >
//                 <AiOutlineFundProjectionScreen
//                   style={{ marginBottom: "2px" }}
//                 />{" "}
//                 Tools
//               </Nav.Link>
//             </Nav.Item>

//             <Nav.Item>
//               <Nav.Link
//                 as={Link}
//                 to=" " // here you put path of contact us /path
//                 onClick={() => updateExpanded(false)}
//               >
//                 <CgFileDocument style={{ marginBottom: "2px" }} /> Contact Us
//               </Nav.Link>
//             </Nav.Item>

//             <Nav.Item>
//               <Nav.Link
//                 as={Link}
//                 to="/ContentGeneration " // here you put path of contact us /path
//                 onClick={() => updateExpanded(false)}
//               >
//                 <CgFileDocument style={{ marginBottom: "2px" }} /> Content
//                 Generation
//               </Nav.Link>
//             </Nav.Item>

//             <Nav.Item>
//               <Nav.Link
//                 as={Link}
//                 to="/TextToImage " // here you put path of contact us /path
//                 onClick={() => updateExpanded(false)}
//               >
//                 <CgFileDocument style={{ marginBottom: "2px" }} /> Text To Image
//               </Nav.Link>
//             </Nav.Item>

//             {/* <Nav.Item>
//               <Nav.Link
//                 href=" "
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <ImBlog style={{ marginBottom: "2px" }} /> Blogs
//               </Nav.Link>
//             </Nav.Item> */}

//             {/* <Nav.Item className="fork-btn">
//               <Button
//                 href=" "
//                 target="_blank"
//                 className="fork-btn-inner"
//               >
//                 <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
//                 <AiFillStar style={{ fontSize: "1.1em" }} />
//               </Button>
//             </Nav.Item> */}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavBar;

// gpt code here
import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
// import logo from "../Assets/logo.png";
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
          <Nav className="ms-auto" defaultActiveKey="#home">
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
