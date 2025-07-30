import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./landing-page/home/HomePage.jsx";
import SignupPage from "./landing-page/signup/SignupPage.jsx";
import AboutPage from "./landing-page/about/AboutPage.jsx";
import ProductsPage from "./landing-page/products/ProductsPage.jsx";
import PricingPage from "./landing-page/pricing/PricingPage.jsx";
import SupportPage from "./landing-page/support/SupportPage.jsx";
import Navbar from "./landing-page/Navbar.jsx";
import Footer from "./landing-page/Footer.jsx";
import NotFound from "./landing-page/NotFound.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
