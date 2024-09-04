// Update after solve refresh issue.
import React, { useState, useEffect } from "react";
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
import { useUser } from "./UserContext";

function NavBar() {
  const { user, setUser } = useUser();
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [setUser]);

  function handleSignOut() {
    setUser(null);
    localStorage.removeItem("user");
  }

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
        <Navbar.Brand className="d-flex">
          <Link to="/">
            {" "}
            {/* Wrap the logo with Link */}
            <img
              src={logo3}
              alt="brand"
              style={{ width: "80px", height: "70px" }} // Inline styles
            />
          </Link>
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
            <Nav.Item>
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
                <NavDropdown.Item
                  as={Link}
                  to="/TextToImage2"
                  onClick={() => updateExpanded(false)}
                >
                  Text To Image 2
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to="/TextToSpeech1"
                  onClick={() => updateExpanded(false)}
                >
                  Text To Speech 1
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/TextToSpeech2"
                  onClick={() => updateExpanded(false)}
                >
                  Text To Speech 2
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
                  to="/admin"
                  onClick={() => updateExpanded(false)}
                >
                  Admin
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/Projects"
                  onClick={() => updateExpanded(false)}
                >
                  More...
                </NavDropdown.Item>
              </NavDropdown>
            </Nav.Item>

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
            {user ? (
              <NavDropdown
                title={
                  <div className="d-flex align-items-center">
                    <p style={{ marginRight: "10px", marginBottom: "0" }}>
                      Hello, {user.name}
                    </p>
                    <img
                      src={user.imageUrl}
                      alt="User"
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item onClick={handleSignOut}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/Signin"
                  onClick={() => updateExpanded(false)}
                >
                  Guest <AiOutlineUser style={{ marginBottom: "2px" }} />
                </Nav.Link>
              </Nav.Item>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
