import React from "react";
import { motion } from "framer-motion";
import msg from "../assets/message.svg";
import location from "../assets/locarion.svg";
const ContactSection = () => {
  // Variants
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const slideLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const slideRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="bg-white py-16">
      <motion.div
        className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Left Content */}
        <motion.div variants={slideLeft}>
          <h2 className="text-5xl font-bold text-gray-900 leading-snug">
            Ready to build your <br />
            <span className="text-blue-500">Authority?</span>
          </h2>

          <p className="text-gray-500 mt-4 text-2xl max-w-md">
            Schedule a discovery call with our architectural lead to audit your
            current performance and map your growth path.
          </p>

          {/* Contact Info */}
          <div className="mt-6 space-y-4 text-sm text-gray-600">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center bg-blue-50 rounded-md">
                <img src={msg} alt="msg" />
              </div>
              <span className="font-semibold">hello@authorityledger.com</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center bg-blue-50 rounded-md">
                <img src={location} alt="location" />
              </div>
              <span className="font-semibold">
                Financial District, New York
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.div
          variants={slideRight}
          className="bg-gray-50 p-6 rounded-xl shadow-sm"
        >
          <motion.form className="space-y-5" variants={container}>
            {/* Full Name */}
            <motion.div variants={fadeUp}>
              <label className="text-xs uppercase">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full mt-1 border-b border-gray-300 bg-transparent focus:outline-none py-2 text-sm"
              />
            </motion.div>

            {/* Email */}
            <motion.div variants={fadeUp}>
              <label className="text-xs uppercase">Company Email</label>
              <input
                type="email"
                placeholder="john@company.com"
                className="w-full mt-1 border-b border-gray-300 bg-transparent focus:outline-none py-2 text-sm"
              />
            </motion.div>

            {/* Project Goals */}
            <motion.div variants={fadeUp}>
              <label className="text-xs uppercase">Project Goals</label>
              <textarea
                placeholder="Tell us about your growth targets..."
                className="w-full mt-1 border-b border-gray-300 bg-transparent focus:outline-none py-2 text-sm resize-none"
                rows="3"
              ></textarea>
            </motion.div>

            {/* Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-black text-white py-3 rounded-md text-sm font-medium"
            >
              Submit Inquiry →
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
