import React from "react";

function Hero() {
  return (
    <div className="hero sm:h-screen w-full text-center mt-16 flex flex-col items-center gap-4">
      <img src="/homeHero.png" alt="" className="max-h-[45vh] mt-16 mb-8" />
      <h1 className="text-2xl font-bold">Invest In Everything</h1>
      <p className="text-xl mb-8">
        Online platform to invest in stocks, derivatives, mutual funds, ETFs,
        bonds, and more.
      </p>
      <button className="bg-[#397ED1] cursor-pointer text-white py-2 px-4 rounded mb-20 sm:mb-0">
        Sign Up For Free
      </button>
    </div>
  );
}

export default Hero;
