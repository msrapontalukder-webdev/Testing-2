import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white  mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Authority Ledger</h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            The premier choice for high-growth enterprise marketing and digital
            architecture.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li>
              <a href="#" className="hover:text-black">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Case Studies
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li>
              <a href="#" className="hover:text-black">
                Performance SEO
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Paid Media
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Brand Identity
              </a>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="font-semibold mb-3">Connect</h3>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li>
              <a href="#" className="hover:text-black">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Twitter (X)
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t py-6 px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© 2024 Authority Ledger. All rights reserved.</p>

        <div className="flex gap-6 mt-3 md:mt-0">
          <a href="#" className="hover:text-black">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-black">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
