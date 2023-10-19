import React from "react";
import "./HomeFooter.css"; // Import the CSS file for the HomeFooter
// import logo from "../../../src/Assets/logo.png"

const HomeFooter = () => {
  return (
    <footer className="homefooter">
      <div className="left">
        <h3>Contact Us</h3>
        <p>Send us a message</p>
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
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/tools">Tools</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="right">
        <div className="logo">{/* src={logo} */}</div>
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
