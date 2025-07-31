import React from "react";

function RProduct({ imgSrc, title, description, learnMore }) {
  return (
    <div className="mt-8 px-8 sm:px-36 flex flex-col sm:flex-row gap-8 sm:gap-32 mb-16">
      <div className="sm:w-1/3 my-auto order-2 sm:order-1">
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <p className=" text-gray-600 mb-4 leading-8">{description}</p>
        <a href={learnMore} className="text-blue-500 hover:text-black">
          Learn More <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
      <div className="sm:w-1/2 order-1 sm:order-2">
        <img src={imgSrc} alt="" className="" />
      </div>
    </div>
  );
}

export default RProduct;
