import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white text-gray-800 shadow-sm">
      <div className="flex items-center justify-between px-6 md:px-8 py-4">
        {/* Logo */}
        <div className="font-bold text-lg">Authority Ledger</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm text-gray-600 font-semibold">
          <li className="hover:text-black cursor-pointer">Home</li>
          <li className="hover:text-black cursor-pointer">Services</li>
          <li className="hover:text-black cursor-pointer">Case Studies</li>
        </ul>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4">
          <button className="bg-black hover:opacity-90 text-sm px-4 py-2 rounded-md text-white">
            Get Started
          </button>
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
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Services</li>
            <li className="cursor-pointer">Case Studies</li>
          </ul>

          <button className="mt-4 w-full bg-black text-white py-2 rounded-md">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
