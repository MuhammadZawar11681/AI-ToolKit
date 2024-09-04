import React, { useState } from "react";
import "./FAQs.css";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is AI ToolKit?",
      answer:
        "AI ToolKit is a web application that provides a suite of AI-powered tools, including Content Generator, Text to Image, Text to Speech, Speech to Text, and Text to Video.",
    },
    {
      question: "How does the Content Generator tool work?",
      answer:
        "The Content Generator uses advanced AI algorithms to help you create written content based on your input, making it easier to generate high-quality text for various purposes.",
    },
    {
      question: "Can I convert text into images using AI ToolKit?",
      answer:
        "Yes, the Text to Image tool in AI ToolKit allows you to generate images based on the text you provide, using AI to interpret and visualize the text creatively.",
    },
    {
      question: "Is it possible to convert speech into text using AI ToolKit?",
      answer:
        "Absolutely! The Speech to Text tool transcribes spoken words into written text accurately, which is useful for note-taking, creating subtitles, and more.",
    },
    {
      question: "What formats are supported by the Text to Video tool?",
      answer:
        "The Text to Video tool can generate videos from your text inputs, offering various templates and customization options to create engaging video content.",
    },
    // Add more FAQs as needed
  ];

  return (
    <div className="faqs-container container mt-5">
      <h2 className="text-center mb-4">Frequently Asked Questions</h2>
      <div className="accordion" id="faqsAccordion">
        {faqs.map((faq, index) => (
          <div className="card mb-3 shadow-sm" key={index}>
            <div className="card-header p-0" id={`heading${index}`}>
              <h5 className="mb-0">
                <button
                  className={`btn btn-link btn-block text-left ${
                    activeIndex === index ? "" : "collapsed"
                  }`}
                  onClick={() => handleToggle(index)}
                  aria-expanded={activeIndex === index}
                  aria-controls={`collapse${index}`}
                >
                  {faq.question}
                </button>
              </h5>
            </div>
            <div
              id={`collapse${index}`}
              className={`collapse ${activeIndex === index ? "show" : ""}`}
              aria-labelledby={`heading${index}`}
              data-parent="#faqsAccordion"
            >
              <div className="card-body">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
