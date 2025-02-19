"use client";
import React from "react";
import { Phone, Globe, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion"; // For animations

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-bold flex items-center space-x-2">
              <span className="bg-green-800 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2.25c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9zm0 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm-3 8.25h6m-3 3v-6"
                  />
                </svg>
              </span>
              <span>Headquarters</span>
            </h2>
            <p className="mt-4 text-gray-300">Salagi Layout</p>
            <p className="text-gray-300">The Gambia</p>
            <p className="mt-4 text-gray-300">
              Empowering all people everywhere to live their happiest lives.
            </p>
            <p className="mt-4 flex items-center space-x-2 text-gray-300 hover:text-white transition duration-300">
              <Phone className="w-5 h-5 text-green-300" />
              <span>+220 501 8946</span>
            </p>
            <p className="flex items-center space-x-2 text-gray-300 hover:text-white transition duration-300">
              <Globe className="w-5 h-5 text-green-300" />
              <span>www.ajshoestore.com</span>
            </p>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold">Categories</h3>
            <ul className="mt-4 space-y-2">
              {["Men's Shoes", "Women's Shoes", "Kids' Shoes", "New Arrivals"].map(
                (item, index) => (
                <li
                  key={index}
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Customer Service */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold">Customer Service</h3>
            <ul className="mt-4 space-y-2">
              {["Contact Us", "Order Tracking", "FAQs", "Size Guide"].map(
                (item, index) => (
                <li
                  key={index}
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-xl font-semibold">Company Info</h3>
            <ul className="mt-4 space-y-2">
              {["About Us", "Careers", "Privacy Policy", "Terms of Service"].map((item, index) => (
                <li
                  key={index}
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social Media Links */}
        <motion.div
          className="mt-8 flex justify-center space-x-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a href="#" className="text-gray-300 hover:text-white transition duration-300">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition duration-300">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition duration-300">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition duration-300">
            <Linkedin className="w-6 h-6" />
          </a>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          className="mt-8 text-center border-t border-green-800 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} AJShoeStore. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;