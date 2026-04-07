import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Marcus Sterling",
    role: "CEO, Quantico Systems",
    text: `"The Authority Ledger didn't just give us a strategy; they rebuilt our entire digital presence. Our lead volume has tripled in under six months."`,
    image: "https://i.ibb.co.com/FLTR1hD6/Abul.jpg",
  },
  {
    name: "Sarah Chen",
    role: "Marketing Director, Nova Retail",
    text: `"Their data-driven approach removed the guesswork from our marketing budget. ROI transparency is finally a reality for us."`,
    image: "https://i.ibb.co.com/2XqFWNs/kasem.jpg",
  },
];

const StarRating = () => {
  return (
    <div className="flex text-blue-500 mb-3">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.45a1 1 0 00-.364 1.118l1.287 3.955c.3.921-.755 1.688-1.54 1.118l-3.37-2.45a1 1 0 00-1.175 0l-3.37 2.45c-.784.57-1.838-.197-1.539-1.118l1.287-3.955a1 1 0 00-.364-1.118L2.124 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.225-3.955z" />
        </svg>
      ))}
    </div>
  );
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Testimonials = () => {
  return (
    <motion.section
      className="bg-gray-50 py-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto px-5">
        <motion.h2
          className="text-2xl font-extrabold text-gray-800 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Trusted by Industry Leaders
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-5">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white p-6 rounded-xl shadow-sm flex-1"
            >
              <StarRating />

              <p className="text-gray-600 text-sm mb-5">{item.text}</p>

              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 rounded-xl"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
