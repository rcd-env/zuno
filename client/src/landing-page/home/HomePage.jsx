import Hero from "./Hero";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Navbar from "../Navbar";
import Footer from "../Footer";
import OpenAccount from "../OpenAccount";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Pricing />
      <OpenAccount />
      <Footer />
    </>
  );
}

export default HomePage;
