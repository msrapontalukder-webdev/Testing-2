import React from "react";
import glass from "../assets/glass.svg";
import container from "../assets/Container.svg";
import icon from "../assets/icon.svg";
const Service = () => {
  return (
    <section className="w-full py-16 px-8 md:px-16 bg-gray-50">
      <div className="w-full">
        {/* TOP TEXT */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our Core Specialties
        </h2>

        <p className="text-gray-600 mb-10 max-w-xl">
          Integrated marketing solutions designed for the modern enterprise,
          backed by performance metrics.
        </p>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* CARD 1 */}
          <div className="group relative bg-white p-6 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md">
            {/* LEFT BORDER EFFECT */}
            <span className="absolute left-0 top-0 h-full w-1 bg-blue-500 scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100 rounded-l-xl"></span>

            <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-md mb-4">
              <img src={glass} alt="glass" />
            </div>

            <h3 className="text-lg font-semibold mb-2">Precision SEO</h3>

            <p className="text-gray-600 text-sm mb-4">
              Dominating search results with technical audits and semantic
              content strategies that rank.
            </p>

            <p className="text-sm font-medium cursor-pointer hover:text-blue-600">
              Learn More →
            </p>
          </div>

          {/* CARD 2 */}
          <div className="group relative bg-white p-6 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md">
            <span className="absolute left-0 top-0 h-full w-1 bg-blue-500 scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100 rounded-l-xl"></span>

            <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-md mb-4">
              <img src={container} alt="container" />
            </div>

            <h3 className="text-lg font-semibold mb-2">Content Power</h3>

            <p className="text-gray-600 text-sm mb-4">
              High-authority editorial pieces that establish your brand as the
              industry standard.
            </p>

            <p className="text-sm font-medium cursor-pointer hover:text-blue-600">
              Learn More →
            </p>
          </div>

          {/* CARD 3 */}
          <div className="group relative bg-white p-6 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md">
            <span className="absolute left-0 top-0 h-full w-1 bg-blue-500 scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100 rounded-l-xl"></span>

            <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-md mb-4">
              <img src={icon} alt="icon" />
            </div>

            <h3 className="text-lg font-semibold mb-2">Performance PPC</h3>

            <p className="text-gray-600 text-sm mb-4">
              Aggressive paid media scaling through machine-learning bidding and
              creative testing.
            </p>

            <p className="text-sm font-medium cursor-pointer hover:text-blue-600">
              Learn More →
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
