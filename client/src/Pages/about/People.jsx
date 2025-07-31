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
        <div className="flex flex-col gap-4 sm:w-[60%] sm:py-auto">
          <p>
            Rakesh founded this Zerodha Clone "Zuno" as a full-stack development
            project to explore the intersection of finance and technology. The
            aim was to replicate the core features of a modern stock trading
            platform, including seamless user onboarding, portfolio tracking,
            and order management, while building everything from the ground up.
          </p>
          <p>
            With a strong interest in fintech, Rakesh designed and developed the
            platform using technologies like React, Node.js, Express, MongoDB,
            and RESTful APIs. Every component, from the frontend UI to secure
            backend logic, has been carefully crafted to mirror the experience
            of using a real-world brokerage app.
          </p>
          <p>Playing DeadShot is his zen.</p>
        </div>
      </div>
    </div>
  );
}

export default People;
