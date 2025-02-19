"use client";
import React from "react";
import { Card, CardContent, CardFooter, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"; // For animations

const cards = [
  {
    image: "/71wF9ChrIfL._AC_SR920,736_.jpg",
    title: "Men's Shoes",
    amount: "D1000",
    button: "Add to Cart",
  },
  {
    image: "/white-casual-shoes-for-men-1000x1000 (1).webp",
    title: "Lightweight Sneakers",
    amount: "D1200",
    button: "Add to Cart",
  },
  {
    image: "/white-casual-shoes-for-men-1000x1000.webp",
    title: "Summer Sports Shoes",
    amount: "D1500",
    button: "Add to Cart",
  },
  {
    image: "/JORDAN+LUKA+3.png",
    title: "Men's Popcorn Sneakers",
    amount: "D900 - 700",
    button: "Add to Cart",
  },
];

const CardWithText = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-8 py-16 lg:p-16 bg-[#EDF5FF]">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="rounded-md bg-white py-5 shadow hover:shadow-lg transition-shadow hover:scale-105 transform duration-300">
            {/* Product Image */}
            <CardContent className="p-0 pt-2">
              <Image
                src={card.image}
                alt={card.title}
                width={300}
                height={300}
                className="w-full rounded-lg h-60 lg:h-52 object-cover"
              />
            </CardContent>

            {/* Product Info */}
            <div className="px-4 py-2">
              <CardTitle className="text-base font-semibold mb-1">
                {card.title}
              </CardTitle>
              <p className="text-sm font-bold text-red-600 mb-2">{card.amount}</p>
              <p className="text-xs text-gray-600">Min. order: 2 pieces</p>
              <p className="text-xs text-gray-600 mb-2">Ready to sell</p>
              <p className="text-xs text-gray-700 font-medium">
                Verified
                <span className="ml-1" role="img" aria-label="verified">
                  ✅
                </span>
              </p>
            </div>

            {/* Footer with Button */}
            <CardFooter className="px-4 py-2">
              <Link href="/login" className="w-full">
                <Button className="w-full bg-white shadow border py-5 text-lg rounded-full border-gray-300 hover:text-white hover:bg-blue-950 text-gray-700 transition-all duration-300">
                  {card.button}
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default CardWithText;