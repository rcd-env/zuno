import React from "react";

function Benefits() {
  return (
    <div className="px-8 sm:px-54 py-16 mt-16">
      <h2 className=" text-2xl text-center font-semibold">
        Benefits of opening a Zuno demat account
      </h2>
      <div className="mt-12 flex flex-col sm:flex-row justify-around gap-8 sm:gap-0">
        <img
          src="/assets/images/benefitsLogo.svg"
          alt=""
          className="sm:w-1/2"
        />
        <div className="flex flex-col gap-8 text-sm sm:text-xl text-gray-700 my-auto sm:pl-32">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Unbeatable pricing</h3>
            <p className="text-lg text-gray-500">
              Zero charges for equity & mutual fund investments. Flat ₹20 fees
              for intraday and F&O trades.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Best investing experience
            </h3>
            <p className="text-lg text-gray-500">
              Simple and intuitive trading platform with an easy-to-understand
              user interface.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6">No spam or gimmicks</h3>
            <p className="text-lg text-gray-500">
              Committed to transparency — no gimmicks, spam, "gamification", or
              intrusive push notifications.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6">The Zuno universe</h3>
            <p className="text-lg text-gray-500">
              More than just an app — gain free access to the entire ecosystem
              of our partner products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
