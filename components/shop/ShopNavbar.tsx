"use client";
import React, { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react"; // Import icons for menu and close
import { motion, AnimatePresence } from "framer-motion"; // For animations
import Link from "next/link";
// import LogoutButton from "../LogoutButton";
// import { Button } from "../ui/button";

const ShopNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Define routes for navigation links
  const navLinks = [
    { name: "Shop", href: "/shop" },
    { name: "Men", href: "/shop/mens" },
    { name: "Women", href: "/shop/womens" },
    { name: "Kids", href: "/shop/kids" },
    { name: "Newly Arrival", href: "/shop/newly-arrival" },
  ];

  return (
    <div className="h-20 w-screen mx-auto top-2 z-50 rounded-full fixed bg-white shadow-md">
      <div className="container mx-auto h-full flex justify-between items-center px-4 md:px-6 lg:px-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-extrabold border hover:shadow text-green-600 shadow bg-gradient-to-l to-blue-900 from-green-900 shadow-green-800 px-8 rounded-full py-3"
        >
          <Link href="/shop">
            AJ<span className="text-blue-600">ShoeStore</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link, index) => (
            <Link key={link.name} href={link.href}>
              <motion.div
                className="text-gray-700 hover:text-gray-900 font-bold transition duration-300"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {link.name}
              </motion.div>
            </Link>
          ))}
        </nav>

        {/* Shopping Cart and Sign In Button */}
        <motion.div
          className="flex items-center space-x-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="#"
            className="text-gray-700 hover:text-gray-900 transition duration-300"
          >
            <ShoppingCart className="h-6 w-6" />
          </Link>
          <Link href="/login">
            {/* <LogoutButton /> */}
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-gray-900 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg"
          >
            <nav className="flex flex-col space-y-6 p-4">
              {navLinks.map((link, index) => (
                <Link key={link.name} href={link.href}>
                  <motion.div
                    className="text-gray-700 hover:text-gray-900 text-xl font-bold transition duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {link.name}
                  </motion.div>
                </Link>
              ))}
              <Link
                href="/register"
                className="text-white sm:block hover:underline text-sm hover:text-blue-600 transition duration-300"
              >
                <button className="bg-green-800 sm:block text-white px-7 py-2 rounded-full hover:bg-gray-800 transition duration-300">
                  Register
                </button>
              </Link>
              <Link
                href="/login"
                className="text-white sm:block hover:underline text-sm hover:text-blue-600 transition duration-300"
              >
                <button className="bg-blue-800 sm:block text-white px-8 py-2 rounded-full hover:bg-gray-800 transition duration-300">
                  Sign In
                </button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ShopNavbar;
