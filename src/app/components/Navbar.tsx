"use client";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 py-4 backdrop-blur-md bg-white/5 border-b border-white/10 flex items-center justify-between">
      <div className="text-white text-2xl font-bold tracking-wider">Dimension</div>
      <div className="hidden md:flex space-x-6 text-white font-medium">
        <a href="#" className="hover:text-orange-400 transition">Home</a>
        <a href="#" className="hover:text-orange-400 transition">Features</a>
        <a href="#" className="hover:text-orange-400 transition">Pricing</a>
        <a href="#" className="hover:text-orange-400 transition">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
