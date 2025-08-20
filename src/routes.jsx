import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";    
import About from "./pages/about";
import Contact from "./pages/contact";
import Menu from "./pages/menu";
import Blog from "./pages/blog";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
};

export default AppRoutes;
