import OpenAccount from "../OpenAccount";
import Hero from "./Hero";
import SignUp from "./SignUp";
import Investments from "./Investments";
import Benefits from "./Benefits";
import Steps from "./Steps";

import Faqs from "./Faqs";

function SignupPage() {
  return (
    <>
      <Hero />
      <SignUp />
      <Investments />
      <Steps />
      <Benefits />

      <Faqs />
      <OpenAccount />
    </>
  );
}

export default SignupPage;
