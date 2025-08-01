import React from "react";
import Hero from "./Hero";
import LogIn from "./LogIn";
import Investments from "./Investments";
import Steps from "./Steps";
import Benefits from "./Benefits";

import Faqs from "./Faqs";
import OpenAccount from "../OpenAccount";

function LoginPage() {
  return (
    <>
      <Hero />
      <LogIn />
      <Investments />
      <Steps />
      <Benefits />

      <Faqs />
      <OpenAccount />
    </>
  );
}

export default LoginPage;
