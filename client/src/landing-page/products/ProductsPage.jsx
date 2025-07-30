import React from "react";
import Hero from "./Hero";
import RProduct from "./RProduct";
import Lproduct from "./Lproduct";

function ProductsPage() {
  return (
    <>
      <Hero />
      <hr className="sm:w-[80%] sm:ml-[10%] text-gray-200" />
      <RProduct />
      <Lproduct />
    </>
  );
}

export default ProductsPage;
