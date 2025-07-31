import React from "react";

function Universe() {
  return (
    <div className="mb-12">
      <h2 className="text-center text-2xl mb-6 font-semibold">
        The Zuno Universe
      </h2>
      <p className="text-center text-xl text-gray-600 mb-16 px-4">
        Extend your trading and investment experience even further with our
        partner platforms
      </p>
      <div className="px-8 sm:px-44 flex flex-col sm:flex-row flex-wrap justify-between">
        <div className="px-6 flex flex-col items-center sm:w-1/3 mb-8">
          <img
            src="/assets/images/zerodhaFundhouse.png"
            alt=""
            className="h-12 mb-4"
          />
          <p className="text-center text-[12px] text-gray-400">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="px-6 flex flex-col items-center sm:w-1/3 mb-8">
          <img
            src="/assets/images/sensibullLogo.svg"
            alt=""
            className="h-10 mb-4"
          />
          <p className="text-center text-[12px] text-gray-400">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="px-6 flex flex-col items-center sm:w-1/3 mb-8">
          <img
            src="/assets/images/tijoriLogo.svg"
            alt=""
            className="h-12 mb-4"
          />
          <p className="text-center text-[12px] text-gray-400">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="px-6 flex flex-col items-center sm:w-1/3 mb-8">
          <img
            src="/assets/images/streakLogo.png"
            alt=""
            className="h-12 mb-4"
          />
          <p className="text-center text-[12px] text-gray-400">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="px-6 flex flex-col items-center sm:w-1/3 mb-8">
          <img
            src="/assets/images/smallcaseLogo.png"
            alt=""
            className="h-12 mb-4"
          />
          <p className="text-center text-[12px] text-gray-400">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="px-6 flex flex-col items-center sm:w-1/3 mb-8">
          <img
            src="/assets/images/dittoLogo.png"
            alt=""
            className="h-12 mb-4"
          />
          <p className="text-center text-[12px] text-gray-400">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Universe;
