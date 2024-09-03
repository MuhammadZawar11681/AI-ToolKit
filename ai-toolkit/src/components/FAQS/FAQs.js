import React, { useState } from 'react';
import './FAQs.css';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the return policy?",
      answer: "Our return policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately, we can’t offer you a refund or exchange."
    },
    {
      question: "How do I track my order?",
      answer: "Once your order has shipped, we will send you an email with a tracking number and a link to track your package."
    },
    {
      question: "Can I purchase items in bulk?",
      answer: "Yes, we offer bulk purchase options. Please contact our sales team for more information."
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
                  className={`btn btn-link btn-block text-left ${activeIndex === index ? '' : 'collapsed'}`}
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
              className={`collapse ${activeIndex === index ? 'show' : ''}`}
              aria-labelledby={`heading${index}`}
              data-parent="#faqsAccordion"
            >
              <div className="card-body">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
