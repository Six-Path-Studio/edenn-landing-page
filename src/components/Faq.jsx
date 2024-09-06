import { useState } from "react";

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How can i get started as a creative on Edenn?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "Who can i find on Edenn?",
      answer: "Tailwind CSS is a utility-first CSS framework for building custom designs.",
    },
    {
      question: "Can I use Edenn for free?",
      answer: "You can install Tailwind CSS and configure it with your React project using PostCSS.",
    },
    {
      question: "How can I verify my account?",
      answer: "You can install Tailwind CSS and configure it with your React project using PostCSS.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mx-auto">
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4 border-b border-[#EAEAEA]">
          <button
            className="w-full text-left py-4 focus:outline-none flex justify-between items-center"
            onClick={() => toggleAccordion(index)}
          >
            <span className="text-lg font-medium text-gray-900">{faq.question}</span>
            <span className="text-gray-500">
              {activeIndex === index ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 15l7-7 7 7"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              )}
            </span>
          </button>
          {activeIndex === index && (
            <div className="py-2">
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
