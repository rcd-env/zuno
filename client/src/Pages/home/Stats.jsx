import React from "react";

function Stats() {
  const Stats = [
    {
      title: "Customer-first always",
      description:
        "That's why 1.6+ crore customers trust Zuno with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.",
    },
    {
      title: "No spam or gimmicks",
      description:
        "No gimmicks, spam, 'gamification', or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.",
    },
    {
      title: "The Zuno universe",
      description:
        "Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.",
    },
    {
      title: "Do better with money",
      description:
        "With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.",
    },
  ];
  return (
    <div className="px-6 sm:px-28 mb-16 flex flex-col sm:flex-row items-center justify-between">
      <div>
        <h2 className="text-xl font-semibold mb-8">Trust With Confidence</h2>
        {Stats.map((stat, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold mb-4">{stat.title}</h3>
            <p className="text-md font-light mb-8 ">{stat.description}</p>
          </div>
        ))}
      </div>
      <div>
        <img src="/assets/images/ecosystem.png" alt="" className="w-lvw" />
        <div className="mt-4 flex justify-between sm:justify-center items-center sm:gap-12">
          <a href="#" className="text-blue-500 hover:text-black">
            Explore Our Products <i className="fa-solid fa-arrow-right"></i>
          </a>
          <a href="#" className="text-blue-500 hover:text-black">
            Try Kite Demo <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Stats;
