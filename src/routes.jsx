import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";    
import About from "./pages/about";
import Contact from "./pages/contact";
import Menu from "./pages/menu";
import Blog from "./pages/blog";
import Reservation from "./pages/reservation";
import CookiesPolicy from "./pages/cookiesPolicy";
import Disclaimer from "./pages/disclaimer";
import TermsConditions from "./pages/terms&conditions";
import PrivacyPolicy from "./pages/privacyPolicy";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/reservation" element={<Reservation />} />
      <Route path="/cookies" element={<CookiesPolicy />} />
      <Route path="/disclaimer" element={<Disclaimer />} />
      <Route path="/terms&conditions" element={<TermsConditions />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
    </Routes>
  );
};

export default AppRoutes;
