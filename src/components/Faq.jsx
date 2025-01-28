import { useState } from "react";

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is Edenn?",
      answer: "Edenn is a platform designed to help tech creatives discover job opportunities, freelance gigs, and networking opportunities in the creative sector. It bridges the gap between talented individuals and organizations seeking creative professionals."
    },
    {
      question: "Who is Edenn for?",
      answer: "Edenn is for creative professionals, including designers, game developers, animators, writers, illustrators, UI/UX experts, and anyone in the tech creative industry looking for work opportunities or collaborations."
    },
    {
      question: "How do I sign up on Edenn?",
      answer: "You can sign up on Edenn by visiting our website or app, creating a profile, and showcasing your skills, portfolio, and experience. It’s free to create an account."
    },
    {
      question: "What types of jobs are available on Edenn?",
      answer: "Edenn offers full-time, part-time, freelance, and contract-based opportunities across multiple industries, including gaming, tech, digital media, and education."
    },
    {
      question: "Is Edenn only for creatives in Nigeria?",
      answer: "No. While Edenn is focused on supporting creatives in underserved and emerging markets (like Nigeria), it is open to professionals and employers from all over the world."
    },
    {
      question: "How does Edenn help employers?",
      answer: "Employers can use Edenn to post job listings, find skilled professionals through the talent pool, and connect with tech creatives to meet their project needs."
    },
    {
      question: "Is there a fee for using Edenn?",
      answer: "For Job Seekers: Creating a profile and applying for jobs is free.\nFor Employers: Posting basic job listings is free, but premium features (e.g., highlighting jobs or accessing a curated talent pool) may require a subscription or one-time fee."
    },
    {
      question: "What makes Edenn different from other platforms?",
      answer: "Edenn is tailored for the creative tech industry, emphasizing underserved regions. It includes features like:\n\n- Easy portfolio uploads.\n- Targeted job recommendations.\n- Localized opportunities for remote and in-person work.\n- Community-driven features like mentorship and collaboration hubs."
    },
    {
      question: "How can I get featured as a top creative on Edenn?",
      answer: "Top creatives are selected based on the quality of their profiles, activity on the platform, client reviews, and portfolio excellence. Consistently updating your profile and showcasing your work improves your chances."
    },
    {
      question: "Is Edenn available as a mobile app?",
      answer: "Yes, Edenn is accessible on both mobile apps (iOS and Android), providing seamless access to opportunities and connections on the go."
    },
    {
      question: "Can I use Edenn for collaboration projects?",
      answer: "Yes! Edenn includes features for finding collaborators for creative projects, whether it’s building a game, launching a digital product, or designing an app."
    },
    {
      question: "How can I contact support if I have issues?",
      answer: "You can contact the Edenn support team through the Help Center on the platform or email us at support@edenn.com."
    },
    {
      question: "Are there any safety measures in place for job seekers?",
      answer: "Edenn verifies employer accounts and listings to ensure job seekers connect with genuine opportunities. Users can also report suspicious activities, and we have a dedicated team to handle such issues."
    },
    {
      question: "How do I get started?",
      answer: "Simply visit www.edenn.com, sign up, complete your profile, and start exploring opportunities tailored to your skills!"
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div data-aos="zoom-out" className="mx-auto">
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
