import React from "react";

function Steps() {
  return (
    <div className="px-8 sm:px-54 py-16 mt-16 bg-gray-50">
      <h2 className=" text-2xl text-center font-semibold">
        Steps to open a demat account with Zuno
      </h2>
      <div className="mt-12 flex flex-col sm:flex-row justify-around gap-8 sm:gap-0">
        <img src="/assets/images/stepsLogo.svg" alt="" />
        <div className="flex flex-col gap-4 text-sm sm:text-xl text-gray-700 my-auto">
          <p>01. Enter the requested details</p>
          <hr className="border-gray-300" />
          <p>02. Complete the signing steps</p>
          <hr className="border-gray-300" />
          <p>03. Start investing!</p>
        </div>
      </div>
    </div>
  );
}

export default Steps;
