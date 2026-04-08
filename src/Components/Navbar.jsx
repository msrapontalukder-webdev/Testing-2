import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white text-gray-800 shadow-sm">
      <div className="flex items-center justify-between px-6 md:px-8 py-4">
        {/* Logo */}
        <a href="#home" className="font-bold text-lg">
          Authority Ledger
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm text-gray-600 font-semibold">
          <li>
            <a href="#home" className="hover:text-black">
              Home
            </a>
          </li>
          <li>
            <a href="#service" className="hover:text-black">
              Services
            </a>
          </li>
          <li>
            <a href="#tesmonials" className="hover:text-black">
              Case Studies
            </a>
          </li>
        </ul>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#contact">
            <button className="bg-black hover:opacity-90 text-sm px-4 py-2 rounded-md text-white">
              Get Started
            </button>
          </a>
        </div>

        {/* Hamburger Icon */}
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
              <a href="#home" onClick={() => setIsOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#service" onClick={() => setIsOpen(false)}>
                Services
              </a>
            </li>
            <li>
              <a href="#tesmonials" onClick={() => setIsOpen(false)}>
                Case Studies
              </a>
            </li>
          </ul>

          <a href="#contact" onClick={() => setIsOpen(false)}>
            <button className="mt-4 w-full bg-black text-white py-2 rounded-md">
              Get Started
            </button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
