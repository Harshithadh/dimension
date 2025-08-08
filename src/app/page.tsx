import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AnimatedBackground from "./components/AnimatedBackground";
import FeatureSection from "./components/FeatureSection";
import AnimatedCards from "./components/AnimatedCards";
//import { motion } from "framer-motion";
//import Hero from "./components/hero";
<div className="p-12 m-8 bg-red-500 text-white text-3xl font-bold">TAILWIND TEST — SHOULD BE RED</div>

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      <AnimatedBackground />
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <AnimatedCards />
    </main>
  );
}
