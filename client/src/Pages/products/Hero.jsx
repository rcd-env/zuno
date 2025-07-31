import React from "react";
import { Link } from "react-router";

function Hero() {
  return (
    <div className="px-8 mt-24 sm:mt-40 text-center text-xl sm:text-2xl mb-12 sm:mb-24 text-gray-600">
      <h1 className="text-3xl mb-2">Zuno Products</h1>
      <p className="text-xl mb-4">
        Sleek, modern, and intuitive trading platforms
      </p>
      <p className="text-sm">
        Check out our{" "}
        <a href="/invest" className="text-blue-500 hover:text-black">
          investment offerings <i className="fa-solid fa-arrow-right"></i>
        </a>
      </p>
    </div>
  );
}

export default Hero;
