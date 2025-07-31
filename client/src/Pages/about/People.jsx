import React from "react";

function People() {
  return (
    <div className="mb-8">
      <h2 className="text-center text-2xl text-gray-600 font-semibold mb-8">
        People
      </h2>
      <div className="px-8 sm:px-52 flex flex-col sm:flex-row justify-between gap-8 ">
        <div className="flex flex-col items-center gap-4 sm:w-[40%]">
          <img
            src="/assets/images/PFP.jpeg"
            alt=""
            className="h-64 w-64 rounded-full"
          />
          <h3 className="text-center">Rakesh Das</h3>
          <p className="text-center">Founder &bull; CEO</p>
        </div>
        <div className="flex flex-col gap-4 sm:w-[60%] sm:pt-10">
          <p>
            Rakesh bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
        </div>
      </div>
    </div>
  );
}

export default People;
