import React, { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="h-16 w-full px-8 sm:px-36 bg-white text-[14.4px] flex justify-between items-center border-b-1 border-b-neutral-200 fixed z-50 top-0">
      <div>
        <h1 className="text-xl tracking-widest text-blue-500">
          <i className="fa-regular fa-heart"></i> Zuno
        </h1>
      </div>

      <div className="hidden sm:flex gap-12 font-light">
        <a href="#" className="hover:text-blue-400">
          Sign Up
        </a>
        <a href="#" className="hover:text-blue-400">
          About
        </a>
        <a href="#" className="hover:text-blue-400">
          Product
        </a>
        <a href="#" className="hover:text-blue-400">
          Pricing
        </a>
        <a href="#" className="hover:text-blue-400">
          Support
        </a>
      </div>

      <button className="block sm:hidden cursor-pointer" onClick={toggleMenu}>
        <div className="w-6 h-6 flex flex-col justify-center items-center relative">
          <span
            className={`w-full h-0.5 bg-black absolute transition-all duration-300 ${
              isMenuOpen ? "rotate-45" : "-translate-y-2"
            }`}
          ></span>
          <span
            className={`w-full h-0.5 bg-black transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-full h-0.5 bg-black absolute transition-all duration-300 ${
              isMenuOpen ? "-rotate-45" : "translate-y-2"
            }`}
          ></span>
        </div>
      </button>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-b-1 border-b-neutral-200 block sm:hidden">
          <div className="flex flex-col gap-4 font-light p-4">
            <a href="#" className="hover:text-blue-400">
              Sign Up
            </a>
            <a href="#" className="hover:text-blue-400">
              About
            </a>
            <a href="#" className="hover:text-blue-400">
              Product
            </a>
            <a href="#" className="hover:text-blue-400">
              Pricing
            </a>
            <a href="#" className="hover:text-blue-400">
              Support
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
