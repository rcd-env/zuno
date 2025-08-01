import React from "react";

function NotFound() {
  return (
    <div className="h-[calc(100vh-13rem)] sm:h-[calc(100vh-5rem)] w-full flex flex-col justify-center items-center px-8">
      <h1 className="text-2xl font-semibold">404 - Not Found</h1>
      <br />
      <p className="font-light text-sm text-justify">
        Sorry, The Page You're Looking For Doesn't Exist.
      </p>
      <br />
      <p className="font-light text-md line-through text-justify">
        or maybe I haven't built this page yet, who knows?
      </p>
    </div>
  );
}

export default NotFound;
