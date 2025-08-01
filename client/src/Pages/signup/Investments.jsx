import React from "react";

function Investments() {
  const investmentOptions = [
    {
      title: "Stocks",
      description: "Invest in all exchange-listed securities",
      imgSrc: "/assets/images/stocks.svg",
    },
    {
      title: "Mutual Funds",
      description: "Invest in commission-free direct mutual funds",
      imgSrc: "/assets/images/mutualFund.svg",
    },
    {
      title: "IPO",
      description: "Apply to the latest IPOs instantly via UPI",
      imgSrc: "/assets/images/ipo.svg",
    },
    {
      title: "Futures & options",
      description:
        "Hedge and mitigate market risk through simplified F&O trading",
      imgSrc: "/assets/images/futureAndOptions.svg",
    },
  ];
  return (
    <div className="px-8 sm:px-54 mt-16">
      <h2 className="text-xl text-center font-semibold">
        Investment options with Zuno demat account
      </h2>
      <div className="mt-16 sm:mt-0  flex flex-col sm:flex-row  flex-wrap gap-8 sm:gap-0">
        {investmentOptions.map((option, index) => (
          <div key={index} className="sm:w-1/2 flex gap-6 sm:mt-16">
            <img
              src={option.imgSrc}
              alt={option.title}
              className="w-16 sm:w-24 h-16 sm:h-24 my-auto"
            />
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold">{option.title}</h3>
              <p className="text-sm text-gray-600 leading-6">
                {option.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-16">
        <button className="px-4 py-2 bg-[#397ED1] hover:bg-[#2c6bbf] text-white rounded cursor-pointer">
          Explore Investments
        </button>
      </div>
    </div>
  );
}

export default Investments;
