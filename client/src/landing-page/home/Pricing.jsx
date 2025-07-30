import React from "react";

function Pricing() {
  const pricingDetails = [
    {
      title: "Free account opening",
      icon: "/pricing0.svg",
    },
    {
      title: "Free equity delivery and direct mutual funds",
      icon: "/pricingEquity.svg",
    },
    {
      title: "Intraday and F&O",
      icon: "/intradayTrades.svg",
    },
  ];
  return (
    <div className="px-6 sm:px-28 flex flex-col mb-16">
      <div className="flex flex-col sm:flex-row items-center sm:gap-4 mb-4 sm:mb-0">
        <div>
          <h2 className="text-xl font-semibold mb-6">Unbeatable pricing</h2>
          <p className="text-md font-light mb-4">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-4">
          {pricingDetails.map((item, index) => (
            <div key={index} className="flex items-center ">
              <img
                src={item.icon}
                alt=""
                className="h-20 w-20 sm:h-28 sm:w-28"
              />
              <span className="text-sm sm:text-[10px] font-light relative top-2 -left-2">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
      <a href="" className="text-blue-500 hover:text-black">
        See Pricing <i class="fa-solid fa-arrow-right"></i>
      </a>
    </div>
  );
}

export default Pricing;
