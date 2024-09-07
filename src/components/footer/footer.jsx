// src/components/Footer/Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer className=" text-white py-4 text-center fixed bottom-0 w-full">
      <p className="text-sm mb-2">© {new Date().getFullYear()} My Company. All rights reserved.</p>
      <div className="mt-2 flex justify-center space-x-4">
        <a href="/privacy" className="text-gray-400 hover:text-gray-300">Privacy Policy</a>
        <a href="/terms" className="text-gray-400 hover:text-gray-300">Terms of Service</a>
        <a href="/contact" className="text-gray-400 hover:text-gray-300">Contact</a>
      </div>
    </footer>
  );
}

export default Footer;
