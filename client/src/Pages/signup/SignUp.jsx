import React from "react";

function SignUp() {
  return (
    <div className="px-8 sm:px-28 mt-24 sm:mt-0 mb-16 flex flex-col sm:flex-row gap-8">
      <div>
        <img src="/assets/images/signup.png" alt="" className="w-lvw" />
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-4">
          Open a Free Demat and Trading Account Online
        </h1>
        <h2 className="text-xl font-semibold mb-8">SignUp Now</h2>
        <p className="hidden sm:block text-md font-light mb-4">
          Or track your existing application.
        </p>
      </div>
    </div>
  );
}

export default SignUp;
