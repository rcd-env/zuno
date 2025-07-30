import Hero from "./Hero";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Navbar from "../Navbar";
import Footer from "../Footer";
import OpenAccount from "../OpenAccount";
import Education from "./Education";
import PressAchievement from "./PressAchievement";

function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <PressAchievement />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
}

export default HomePage;
