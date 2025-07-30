import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./landing-page/home/HomePage.jsx";
import SignupPage from "./landing-page/signup/SignupPage.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/about" element={<SignupPage />} />
      <Route path="/product" element={<SignupPage />} />
      <Route path="/pricing" element={<SignupPage />} />
      <Route path="/support" element={<SignupPage />} />
    </Routes>
  </BrowserRouter>
);
