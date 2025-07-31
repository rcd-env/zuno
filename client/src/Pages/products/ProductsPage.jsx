import React from "react";
import Hero from "./Hero";
import RProduct from "./RProduct";
import Lproduct from "./Lproduct";
import Universe from "./Universe";
import OpenAccount from "../OpenAccount";

function ProductsPage() {
  return (
    <>
      <Hero />
      <hr className="sm:w-[80%] sm:ml-[10%] text-gray-200" />
      <Lproduct
        imgSrc={"/assets/images/kite.png"}
        title={"Kite"}
        description={
          "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        }
        tryDemo={"/demo"}
        learnMore={"/learn-more"}
        googlePlay={"/google-play"}
        appStore={"/app-store"}
      />
      <RProduct
        imgSrc={"/assets/images/console.png"}
        title={"Console"}
        description={
          "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        }
        learnMore={"/learn-more"}
      />
      <Lproduct
        imgSrc={"/assets/images/coin.png"}
        title={"Coin"}
        description={
          "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        }
        tryDemo={"/demo"}
        learnMore={"/learn-more"}
        googlePlay={"/google-play"}
        appStore={"/app-store"}
      />
      <RProduct
        imgSrc={"/assets/images/kiteconnect.png"}
        title={"Kite Connect API"}
        description={
          "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        }
        learnMore={"/learn-more"}
      />
      <Lproduct
        imgSrc={"/assets/images/varsity.png"}
        title={"Varsity Mobile"}
        description={
          "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        }
        googlePlay={"/google-play"}
        appStore={"/app-store"}
      />
      <p className="text-center text-gray-500 text-xl px-4 sm:px-0 mb-16">
        Want to know my tech stack? Check out{" "}
        <a
          href="https://github.com/rcd-env/zuno"
          className="text-blue-500 hover:text-black"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zuno.tech
        </a>{" "}
        Repo
      </p>
      <Universe />
      <OpenAccount />
    </>
  );
}

export default ProductsPage;
