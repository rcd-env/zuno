import Hero from "./Hero";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Navbar from "../Navbar";
import Footer from "../Footer";
import OpenAccount from "../OpenAccount";
import Education from "./Education";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
      <Footer />
    </>
  );
}

export default HomePage;
