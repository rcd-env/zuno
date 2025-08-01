import React from "react";
import { Link } from "react-router";

function OpenAccount() {
  return (
    <div className="text-center px-8 sm:px-0">
      <h1 className="text-2xl font-bold mb-8">Open a Zuno Account</h1>
      <p className="text-md mb-8 text-gray-500">
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O
        trades.
      </p>
      <button className="bg-[#397ED1] hover:bg-[#2c6bbf] cursor-pointer text-white py-2 px-4 rounded mb-12">
        <Link to="/signup">Sign Up For Free</Link>
      </button>
    </div>
  );
}

export default OpenAccount;
