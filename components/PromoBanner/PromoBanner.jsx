"use client";
import React from "react";
import { motion } from "framer-motion"; // For animations
import { Button } from "../ui/button"; // Assuming you have a Button component
import Link from "next/link";

const PromoBanner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 px-4 lg:px-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center lg:text-left"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Step Into Comfort and Style
          </h2>
          <p className="text-lg mb-6">
            Discover our exclusive collection of shoes designed for every occasion. Get a
            personalized fit guide, expert recommendations, and special discounts—all
            tailored just for you.
          </p>
          <Link href="/shop">
          <Button className="bg-white text-blue-900 hover:bg-gray-100 font-semibold py-3 px-6 rounded-full">
            Explore Now
          </Button>
          </Link>
        </motion.div>

        {/* Image or Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden lg:block"
        >
          <img
            src="/shoe-promo.png" // Replace with your image path
            alt="Shoe Promotion"
            className="w-96 h-auto rounded-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default PromoBanner;