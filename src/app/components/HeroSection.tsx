"use client";
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-br from-[#2e0202] via-[#6a040f] to-[#03071e] text-white px-8 relative overflow-hidden">
      
      {/* Subtle glow rings background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-pink-500/20 rounded-full blur-3xl top-[-100px] left-[-150px]"></div>
        <div className="absolute w-[500px] h-[500px] bg-orange-400/20 rounded-full blur-3xl bottom-[-100px] right-[-120px]"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="z-10 max-w-4xl text-center"
      >
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-[0_0_10px_rgba(255,100,100,0.8)]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          Welcome to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 animate-pulse">
            Dimension
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-white/80 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          A next-gen playground where tech meets blazing design — light it up and dive in.
        </motion.p>

        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-full text-white font-semibold shadow-lg hover:shadow-[0_0_20px_rgba(255,80,0,0.8)] transition duration-300"
          >
            Get Started
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border border-white/30 rounded-full text-white hover:bg-white/10 transition duration-300"
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
