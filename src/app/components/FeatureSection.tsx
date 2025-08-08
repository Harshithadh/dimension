"use client";
import { motion } from "framer-motion";
import {
  Rocket,
  ShieldCheck,
  Globe,
  Code,
} from "lucide-react";

const features = [
  {
    icon: <Rocket size={32} />,
    title: "Fast & Lightweight",
    description: "Dimension loads fast and is optimized for performance.",
  },
  {
    icon: <Code size={32} />,
    title: "Developer Friendly",
    description: "Built using clean code and best practices with TypeScript.",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Secure by Default",
    description: "Security is a first-class citizen in our architecture.",
  },
  {
    icon: <Globe size={32} />,
    title: "Globally Available",
    description: "Deployed on a global edge network for low latency.",
  },
];

export default function FeatureSection() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose Dimension?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="bg-white/10 border border-white/20 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="mb-4 text-white">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
