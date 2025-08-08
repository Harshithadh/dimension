"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center px-4"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Build something extraordinary.
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Empower your ideas with motion, code, and creativity.
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition">
          Get Started
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
