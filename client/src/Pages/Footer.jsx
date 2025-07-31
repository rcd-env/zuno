import React from "react";
import { Link } from "react-router";

function Footer() {
  return (
    <footer className="w-full  sm:h-20 bg-white py-4 sm:py-0 flex flex-col gap-4 sm:gap-0 sm:flex-row justify-around items-center border-t-1 border-t-neutral-200 ">
      <div>&copy; Zuno</div>
      <div className="f-info-links">
        <Link to="/privacy" className="hover:underline">
          Privacy
        </Link>{" "}
        &bull;{" "}
        <Link to="/terms" className="hover:underline">
          Terms
        </Link>
      </div>
      <div className="f-info-socials flex justify-around items-center gap-3 ">
        <a
          href="https://github.com/rcd-env"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/rakesh-das001"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a
          href="https://www.x.com/rcd_env/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl"
        >
          <i className="fa-brands fa-x-twitter"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
