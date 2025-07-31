import React, { useState } from "react";
import { Link } from "react-router";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="h-16 w-full px-8 sm:px-36 bg-white text-[14.4px] flex justify-between items-center border-b-1 border-b-neutral-200 fixed z-50 top-0">
      <div>
        <Link to="/" onClick={closeMenu}>
          <h1 className="text-xl font-semibold tracking-widest text-blue-500">
            Zuno
          </h1>
        </Link>
      </div>

      <div className="hidden sm:flex gap-12 font-light">
        <Link to="/signup" className="hover:text-blue-400">
          Sign Up
        </Link>
        <Link to="/about" className="hover:text-blue-400">
          About
        </Link>
        <Link to="/products" className="hover:text-blue-400">
          Products
        </Link>
        <Link to="/pricing" className="hover:text-blue-400">
          Pricing
        </Link>
        <Link to="/support" className="hover:text-blue-400">
          Support
        </Link>
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
            <Link
              to="/signup"
              className="hover:text-blue-400"
              onClick={closeMenu}
            >
              Sign Up
            </Link>
            <Link
              to="/about"
              className="hover:text-blue-400"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              to="/products"
              className="hover:text-blue-400"
              onClick={closeMenu}
            >
              Products
            </Link>
            <Link
              to="/pricing"
              className="hover:text-blue-400"
              onClick={closeMenu}
            >
              Pricing
            </Link>
            <Link
              to="/support"
              className="hover:text-blue-400"
              onClick={closeMenu}
            >
              Support
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
