import React from "react";

function Navbar() {
  return (
    <nav className="h-16 w-full px-36 bg-white flex justify-between items-center border-b-1 border-b-neutral-200 fixed z-50 top-0 ">
      <div>
        <h1 className="text-2xl tracking-widest text-blue-500">&copy; Zuno</h1>
      </div>
      <div className="flex gap-12 font-light">
        <a href="#">SignUp</a>
        <a href="#">About</a>
        <a href="#">Product</a>
        <a href="#">Pricing</a>
        <a href="#">Support</a>
      </div>
    </nav>
  );
}

export default Navbar;
