import React from "react";
import "./HomeFooter.css"; // Import the CSS file for the HomeFooter
import logo from "../../../src/Assets/logo3.png";
import { Link } from "react-router-dom";

const HomeFooter = () => {
  return (
    <footer className="homefooter">
      <div className="left">
        <h3>Contact us</h3>
        <p>Send Us a Message</p>
        <form>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Enter Message"></textarea>
          <button className="submit-button">Submit</button>
        </form>
      </div>
      <div className="middle">
        <h3>Sitemap</h3>
        <p>All our pages</p>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/Projects">Tools</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="right">
        <div className="logo">
          <img src={logo} alt="Logo" /> {/* Insert image logo */}
        </div>
        <div className="contact-info">
          <div className="call">
            <i className="fas fa-phone"></i> Call: +92-317-988-9883
          </div>
          <div className="email">
            <i className="fas fa-envelope"></i> Email: aitoolkit@gmail.com
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;
