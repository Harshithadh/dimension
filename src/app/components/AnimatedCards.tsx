"use client";

import { motion } from "framer-motion";

const cards = [
  {
    title: "AI Integrations",
    desc: "Powerful AI tools built directly into your workflow.",
  },
  {
    title: "Realtime Sync",
    desc: "Collaborate live with teammates across the globe.",
  },
  {
    title: "Custom Workflows",
    desc: "Design workflows tailored to your team’s needs.",
  },
  {
    title: "Secure Backups",
    desc: "All your data, encrypted and backed up daily.",
  },
];

export default function AnimatedCards() {
  return (
    <section className="py-24 px-6 bg-zinc-950 relative z-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Explore Our Capabilities
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              className="rounded-2xl border border-zinc-800 p-6 bg-zinc-900 text-left shadow-lg transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, rotate: -0.5 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-400 text-sm">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
