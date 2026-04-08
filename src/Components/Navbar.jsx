import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white text-gray-800 shadow-sm">
      <div className="flex items-center justify-between px-6 md:px-8 py-4">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="font-bold text-lg"
        >
          Authority Ledger
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm text-gray-600 font-semibold">
          <li>
            <button
              onClick={() => scrollToSection("home")}
              className="hover:text-black"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("service")}
              className="hover:text-black"
            >
              Services
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="hover:text-black"
            >
              Case Studies
            </button>
          </li>
        </ul>

        {/* Right Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-black hover:opacity-90 text-sm px-4 py-2 rounded-md text-white"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            <li>
              <button onClick={() => scrollToSection("home")}>Home</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("service")}>
                Services
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("testimonials")}>
                Case Studies
              </button>
            </li>
          </ul>

          <button
            onClick={() => scrollToSection("contact")}
            className="mt-4 w-full bg-black text-white py-2 rounded-md"
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
