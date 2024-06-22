import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import { UserProvider } from "./components/UserContext";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Footer";
// import Resume from "./components/Resume/ResumeNew";
import Projects from "./components/Projects/Projects";
import Tools from "../src/components/Tools/Projects";
import ContentGeneration from "./components/ContentGeneration1/ContentGen";
// import TextToImage from "./components/TextToImage/TextToImage";
import TextToImage from "./components/TextToImage2/imageG2";
import TextToSpeech from "./components/TextToSpeech/text-to-speech";
import SpeechToText from "./components/SpeechToText/speech-to-text";
import TextToVideo from "./components/TextToVideo/TextToVideo";
import Signup from "./components/Login/Signup";
import Signin from "./components/Login/Signin";
import ContactUs from "./components/ContactUs/Contact"

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <UserProvider>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/project" element={<Tools />} />
            <Route path="/project" element={<Tools />} />
            <Route path="/ContentGeneration" element={<ContentGeneration />} />
            <Route path="/TextToImage" element={<TextToImage />} />
            <Route path="/TextToSpeech" element={<TextToSpeech />} />
            <Route path="/SpeechToText" element={<SpeechToText />} />
            <Route path="/TextToVideo" element={<TextToVideo />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Signin" element={<Signin />} />
          </Routes>
        </UserProvider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
