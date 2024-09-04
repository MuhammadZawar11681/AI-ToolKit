import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function LoginPrompt2() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-80 p-5 animate__animated animate__slideInUp"
         style={{
           backgroundColor: "#34495e",
           borderRadius: "12px",
           padding: "40px",
           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
         }}>
      <h1 className="display-4 font-weight-bold animate__animated animate__pulse animate__infinite"
          style={{
            color: "#e74c3c",
            marginBottom: "20px"
          }}>
        <strong>
          <i className="fas fa-exclamation-triangle"></i> Access Denied
        </strong>
      </h1>
      <h2 className="text-white mt-4 animate__animated animate__fadeIn animate__delay-2s"
          style={{
            color: "#ecf0f1"
          }}>
        Please sign in to access{" "}
        <span style={{ color: "#f39c12" }}>this tool.</span>
      </h2>
      <div className="bg-white shadow-lg rounded p-5 text-center mt-4"
           style={{
             backgroundColor: "#ecf0f1",
             color: "#2c3e50"
           }}>
        <h3 className="mb-4 font-weight-bold" style={{ color: "#34495e" }}>
          Don't Miss Out!
        </h3>
        <p className="mb-4" style={{ color: "#7f8c8d" }}>
          Sign in now to unlock all features and make the most out of our AI tools.
        </p>
        <Link to="/Signin">
          <Button
            variant="warning"
            size="lg"
            className="font-weight-bold"
            style={{
              width: "200px",
              backgroundColor: "#e74c3c",
              borderColor: "#e74c3c",
              color: "#fff"
            }}
          >
            <i className="fas fa-sign-in-alt"></i> Sign In
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default LoginPrompt2;
