import React, { useState } from "react";
import { FiChevronRight, FiChevronDown } from "react-icons/fi"; // Using react-icons for the arrows

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null); // State to manage which FAQ item is open

  const faqItems = [
    {
      question: "What will be the price?",
      answer:
        "The price varies depending on the specific service or plan you choose. Please refer to our pricing plans section for detailed information, or contact us for a custom quote.",
    },
    {
      question: "Is my entire area will cover?",
      answer:
        "Our coverage depends on the service. For specific details on area coverage, please check the service description or get in touch with our sales team.",
    },
    {
      question: "Is there any customer supports?",
      answer:
        "Yes, we offer comprehensive customer support. You can reach us via phone, email, or live chat during business hours. Our team is dedicated to assisting you with any queries or issues.",
    },
    {
      question: "How long does it take to get started?",
      answer:
        "Getting started is quick and easy! Most services can be set up within 24-48 hours after your registration and payment are complete. Some complex services might require a bit more time.",
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer:
        "Absolutely! You can easily upgrade or downgrade your plan at any time through your account dashboard. Changes will be reflected in your next billing cycle.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); 
  };

  return (
    <section className="py-12 w-full bg-white font-sans">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-gray-800 text-center mb-10 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          <span className="text-[#ff9100]">Frequently</span> asked questions
        </h2>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <button
                className="flex justify-between items-center w-full text-left py-3 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg md:text-xl font-medium text-gray-800">
                  {item.question}
                </span>
                {openIndex === index ? (
                  <FiChevronDown className="h-6 w-6 text-orange-500" />
                ) : (
                  <FiChevronRight className="h-6 w-6 text-gray-700" />
                )}
              </button>
              {openIndex === index && (
                <div className="mt-2 pr-8 text-gray-600 text-base md:text-lg animate-fade-in-down">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;