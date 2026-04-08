import React from "react";
import { motion } from "framer-motion";
import home from "../assets/hero (2).png";

const Home = () => {
  return (
    <section className="w-full min-h-[90vh] flex items-center px-4 sm:px-6 md:px-12 lg:px-16 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full">
        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">
          <p className="text-xs tracking-widest text-blue-500 mb-3 uppercase">
            Scalable Intelligence
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
            Accelerate <br />
            <span className="text-blue-500">Your Growth</span>
          </h1>

          <p className="text-gray-600 mb-6 max-w-md mx-auto md:mx-0 text-sm sm:text-base">
            We help high-growth companies scale with data-driven marketing
            strategies that turn authority into measurable revenue.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <button className="bg-black text-white px-5 py-3 rounded-md text-sm hover:opacity-90 w-full sm:w-auto">
              Partner With Us →
            </button>

            <button className="bg-gray-200 text-gray-800 px-5 py-3 rounded-md text-sm hover:bg-gray-300 w-full sm:w-auto">
              View Services
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center md:justify-end w-full">
          <div className="relative">
            {/* IMAGE */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                y: [0, -15, 0],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                scale: { duration: 0.8, ease: "easeOut" },
                opacity: { duration: 0.8 },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
              className="drop-shadow-xl"
            >
              <img
                src={home}
                alt="hero"
                className="w-[260px] sm:w-[320px] md:w-[400px] lg:w-[450px] object-contain rounded-3xl border-2"
              />
            </motion.div>

            {/* FLOATING CARD */}
            <div className="absolute top-2 right-2 sm:-top-4 sm:-right-4 md:-top-6 md:-right-6 bg-white rounded-2xl shadow-xl px-4 py-3 sm:px-5 sm:py-4 z-10">
              <p className="text-black font-bold text-lg sm:text-xl">+142%</p>
              <p className="text-gray-500 text-xs sm:text-sm">Monthly ROI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
