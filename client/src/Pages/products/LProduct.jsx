import React from "react";

function LProduct({
  imgSrc,
  title,
  description,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="mt-8 px-8 sm:px-36 flex flex-col sm:flex-row gap-8 sm:gap-32 mb-16">
      <div className="sm:w-1/2">
        <img src={imgSrc} alt="" className="" />
      </div>
      <div className="sm:w-1/3 my-auto">
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <p className=" text-gray-600 mb-4 leading-8">{description}</p>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-15 mb-4">
          {tryDemo ? (
            <a href={tryDemo} className="text-blue-500 hover:text-black">
              Try Demo <i className="fa-solid fa-arrow-right"></i>
            </a>
          ) : null}
          {learnMore ? (
            <a href={learnMore} className="text-blue-500 hover:text-black">
              Learn More <i className="fa-solid fa-arrow-right"></i>
            </a>
          ) : null}
        </div>
        <div className="flex gap-4">
          {googlePlay ? (
            <a href={googlePlay}>
              <img src="/assets/images/googlePlayBadge.svg" alt="Google Play" />
            </a>
          ) : null}
          {appStore ? (
            <a href={appStore}>
              <img src="/assets/images/appstoreBadge.svg" alt="App Store" />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default LProduct;
