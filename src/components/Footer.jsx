import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-darkblue text-white py-6 font-opensans">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between ">
  
        <div className="flex space-x-6">
          <a href="/terms" className="hover:underline">
            Terms & Conditions
          </a>
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/faqs" className="hover:underline">
            FAQs
          </a>
        </div>

        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-xl hover:text-mint-500 transition-all ease-in duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/sadaf-shahab-ssr123"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-xl hover:text-mint-500 transition-all ease-in duration-300" />
          </a>
          <a
            href="https://www.twitter.com/sadafshahab12"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-xl hover:text-mint-500 transition-all ease-in duration-300" />
          </a>
        </div>

        {/* Copyright Notice */}
        <p className="text-sm mt-4 md:mt-0">
          © 2025 Wanderlust Adventures. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
