import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./Pages/home/HomePage.jsx";
import SignupPage from "./Pages/signup/SignupPage.jsx";
import AboutPage from "./Pages/about/AboutPage.jsx";
import ProductsPage from "./Pages/products/ProductsPage.jsx";
import PricingPage from "./Pages/pricing/PricingPage.jsx";
import SupportPage from "./Pages/support/SupportPage.jsx";
import Navbar from "./Pages/Navbar.jsx";
import Footer from "./Pages/Footer.jsx";
import NotFound from "./Pages/NotFound.jsx";
import LoginPage from "./Pages/signup/LoginPage.jsx";
import ScrollToTop from "./Pages/ScrollToTop.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ScrollToTop />
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<ProductsPage />} />
      {/* <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
