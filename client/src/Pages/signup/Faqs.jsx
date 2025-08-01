import React, { useState } from "react";

function Faqs() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "What is Zuno and how does it work?",
      answer:
        "Zuno is a modern trading platform that provides seamless access to stock markets, mutual funds, and other investment options. Our platform offers real-time market data, advanced charting tools, and a user-friendly interface to help you make informed investment decisions.",
    },
    {
      id: 2,
      question: "How do I open a trading account with Zuno?",
      answer:
        "Opening an account with Zuno is simple and can be done entirely online. You'll need to provide basic personal information, upload required documents (PAN card, Aadhaar, bank details), and complete the KYC process. The entire process typically takes 24-48 hours for approval.",
    },
    {
      id: 3,
      question: "What are the charges and fees for trading?",
      answer:
        "Zuno offers competitive pricing with zero brokerage on equity delivery trades. For intraday and F&O trades, we charge a flat fee of ₹20 per executed order. There are no account maintenance charges for the first year, and we maintain full transparency in our fee structure.",
    },
    {
      id: 4,
      question: "Is my money and data secure with Zuno?",
      answer:
        "Absolutely. Zuno employs bank-grade security measures including 256-bit SSL encryption, two-factor authentication, and secure data centers. Your funds are held in segregated accounts with leading banks, and we are fully regulated by SEBI, ensuring complete compliance with financial regulations.",
    },
  ];

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="px-8 sm:px-36 py-8 sm:py-12">
      <h2 className="text-2xl font-semibold mb-8 text-center">
        Frequently Asked Questions
      </h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {faqData.map((faq) => (
          <div
            key={faq.id}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <button
              onClick={() => toggleFaq(faq.id)}
              className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors duration-200 focus:outline-none cursor-pointer"
            >
              <span className="text-lg font-medium text-gray-900 pr-4">
                {faq.question}
              </span>
              <div className="flex-shrink-0">
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${
                    openFaq === faq.id ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openFaq === faq.id
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-4 pt-2 bg-gray-50">
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faqs;
