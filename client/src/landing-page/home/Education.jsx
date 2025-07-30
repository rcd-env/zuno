import React from "react";

function Education() {
  return (
    <div className="px-8 sm:px-28 flex flex-col sm:flex-row sm:gap-28 mb-16">
      <div>
        <img src="/assets/images/education.svg" alt="" />
      </div>
      <div className="mt-8 sm:mt-2 flex flex-col gap-2">
        <h2 className="text-xl font-semibold mb-8">
          Free and open market education
        </h2>
        <p className="text-md font-light mb-2">
          Varsity, the largest online stock market education book in the world
          covering everything from the basics to advanced trading.
        </p>
        <a href="" className="text-blue-500 hover:text-black mb-8">
          Varsity <i class="fa-solid fa-arrow-right"></i>
        </a>
        <p className="text-md font-light mb-2">
          TradingQ&A, the most active trading and investment community in India
          for all your market related queries.
        </p>
        <a href="" className="text-blue-500 hover:text-black mb-4">
          Trading Q&A <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>
  );
}

export default Education;
