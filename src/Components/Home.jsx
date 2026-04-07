import React from "react";
import { motion } from "framer-motion";
import home from "../assets/hero (2).png";

const Hero = () => {
  return (
    <section className="w-full min-h-[90vh] flex items-center px-8 md:px-16 bg-gray-50">
      <div className="grid md:grid-cols-2 gap-10 items-center w-full">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-xs tracking-widest text-blue-500 mb-4 uppercase">
            Scalable Intelligence
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Accelerate <br />
            <span className="text-blue-500">Your Growth</span>
          </h1>

          <p className="text-gray-600 mb-8 max-w-md">
            We help high-growth companies scale with data-driven marketing
            strategies that turn authority into measurable revenue.
          </p>

          <div className="flex gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-md text-sm hover:opacity-90">
              Partner With Us →
            </button>

            <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md text-sm hover:bg-gray-300">
              View Services
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end w-full">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              y: [0, -20, 0],
            }}
            transition={{
              scale: { duration: 0.8, ease: "easeOut" },
              opacity: { duration: 0.8 },
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            whileHover={{ scale: 1.1 }}
            className="drop-shadow-xl flex justify-end w-full"
          >
            <img
              src={home}
              alt="hero"
              className="w-[350px] md:w-[450px] object-contain rounded-3xl border-2 ml-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
