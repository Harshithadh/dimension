"use client";
import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
      {/* Glowing circle 1 */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-purple-500 rounded-full opacity-30 blur-3xl"
        initial={{ x: -200, y: -200 }}
        animate={{ x: 0, y: 0 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Glowing circle 2 */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-pink-500 rounded-full opacity-20 blur-3xl top-1/2 left-2/3"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
      />
    </div>
  );
};

export default AnimatedBackground;
