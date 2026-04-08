import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white mt-20 border-t">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <h2 className="text-lg font-semibold mb-3">Authority Ledger</h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
              The premier choice for high-growth enterprise marketing and
              digital architecture.
            </p>
          </div>

          {/* Company */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide text-gray-700">
              Company
            </h3>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li>
                <a href="#" className="hover:text-black transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide text-gray-700">
              Services
            </h3>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li>
                <a href="#" className="hover:text-black transition">
                  Performance SEO
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition">
                  Paid Media
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition">
                  Brand Identity
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide text-gray-700">
              Connect
            </h3>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li>
                <a href="#" className="hover:text-black transition">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition">
                  Twitter (X)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Authority Ledger. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-black transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-black transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
