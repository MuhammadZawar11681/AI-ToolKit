import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import { UserProvider } from "./components/UserContext";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Footer";
import Projects from "../src/components/Projects/Projects";
import Tools from "../src/components/Tools/Projects";
import ContentGeneration from "./components/ContentGeneration1/ContentGen";
import TextToImage from "./components/TextToImage1/TextToImage";
import TextToImage2 from "./components/TextToImage2/imageG2";
import TextToSpeech1 from "./components/TextToSpeech1/text-to-speech";
import TextToSpeech2 from "./components/TextToSpeech2/text-to-speech1";
import SpeechToText from "./components/SpeechToText/speech-to-text";
import TextToVideo from "./components/TextToVideo/TextToVideo";
import Signup from "./components/Login/Signup";
import Signin from "./components/Login/Signin";
import ContactUs from "./components/ContactUs/Contact";
import Admin from "./components/Admin/Admin1";
import LoginPromp from "./components/LoginPrompt/LoginPrompt1";
import "bootstrap/dist/css/bootstrap.min.css";
import Particle from "./components/Particle";
import FAQs from "./components/FAQS/FAQs";

//import './tailwind.css';
// import Resume from "./components/Resume/ResumeNew";

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
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <UserProvider>
      <Router>
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <UserProvider>
            <Navbar />
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/about" element={<About />} />
              <Route path="/Projects" element={<Projects />} />
              <Route path="/tools" element={<Tools />} />
              <Route
                path="/ContentGeneration"
                element={<ContentGeneration />}
              />
              <Route path="/TextToImage" element={<TextToImage />} />
              <Route path="/TextToImage2" element={<TextToImage2 />} />
              <Route path="/TextToSpeech1" element={<TextToSpeech1 />} />
              <Route path="/TextToSpeech2" element={<TextToSpeech2 />} />
              <Route path="/SpeechToText" element={<SpeechToText />} />
              <Route path="/TextToVideo" element={<TextToVideo />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="*" element={<Navigate to="/" />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/Signin" element={<Signin />} />
              <Route path="/LoginPromp" element={<LoginPromp />} />
              <Route path="/FAQs" element={<FAQs />} />
            </Routes>
          </UserProvider>
          <Particle />
          <Footer />
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
