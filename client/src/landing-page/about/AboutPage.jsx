import React from "react";
import Hero from "./Hero";
import Aim from "./Aim";
import People from "./People";

function AboutPage() {
  return (
    <>
      <Hero />
      <hr className="sm:w-[80%] sm:ml-[10%] text-gray-200" />
      <Aim />
      <People />
    </>
  );
}

export default AboutPage;
