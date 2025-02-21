"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "../ui/card";
import Image from "next/image";
import { motion } from "framer-motion"; // For animations

// Data for each category
const mens = [
  {
    image: "/mens-shoe/mens1.jpeg",
    title: "Men's Casual Shoes",
    amount: "D1000",
    button: "Add to Cart",
  },
  {
    image: "/mens-shoe/mens2.jpeg",
    title: "Men's Sneakers",
    amount: "D1200",
    button: "Add to Cart",
  },
  {
    image: "/mens-shoe/mens4.jpeg",
    title: "Men's Sports Shoes",
    amount: "D1500",
    button: "Add to Cart",
  },
  {
    image: "/mens-shoe/mens5.jpeg",
    title: "Men's Formal Shoes",
    amount: "D900 - 700",
    button: "Add to Cart",
  },
];

const womens = [
  {
    image: "/womens-shoe/womens1.jpeg",
    title: "Women's Heels",
    amount: "D1100",
    button: "Add to Cart",
  },
  {
    image: "/womens-shoe/womens2.jpeg",
    title: "Women's Flats",
    amount: "D900",
    button: "Add to Cart",
  },
  {
    image: "/womens-shoe/womens3.jpeg",
    title: "Women's Sneakers",
    amount: "D1300",
    button: "Add to Cart",
  },
  {
    image: "/womens-shoe/womens4.jpeg",
    title: "Women's Boots",
    amount: "D1400",
    button: "Add to Cart",
  },
];

const kids = [
  {
    image: "/kids-shoe/kids5.jpeg",
    title: "Kids' Sneakers",
    amount: "D800",
    button: "Add to Cart",
  },
  {
    image: "/kids-shoe/kids2.jpeg",
    title: "Kids' Sandals",
    amount: "D700",
    button: "Add to Cart",
  },
  {
    image: "/kids-shoe/kids3.jpeg",
    title: "Kids' Boots",
    amount: "D900",
    button: "Add to Cart",
  },
  {
    image: "/kids-shoe/kids6.jpeg",
    title: "Kids' Casual Shoes",
    amount: "D750",
    button: "Add to Cart",
  },
];

const newArrivals = [
  {
    image: "/new-arrivals/new1.jpeg",
    title: "Limited Edition Sneakers",
    amount: "D2000",
    button: "Add to Cart",
  },
  {
    image: "/new-arrivals/new2.jpeg",
    title: "Designer Heels",
    amount: "D1800",
    button: "Add to Cart",
  },
  {
    image: "/new-arrivals/new3.jpeg",
    title: "Trendy Boots",
    amount: "D1600",
    button: "Add to Cart",
  },
  {
    image: "/new-arrivals/new4.jpeg",
    title: "Casual Loafers",
    amount: "D1200",
    button: "Add to Cart",
  },
];

const TabImages = () => {
  return (
    <div className="container bg-white mx-auto px-4 pb-16 pt-24">
      {/* Heading and Subheading */}
      <div className="text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        >
          Step Into Style
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base md:text-lg text-gray-600"
        >
          Explore our curated collection of shoes designed for every occasion.
        </motion.p>
      </div>

      {/* Tabs Section */}
      <Tabs defaultValue="mens" className="w-full">
        {/* Tabs List with Animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent">
            <TabsTrigger
              value="mens"
              className="px-4 py-2 rounded-md font-medium transition-all duration-300 data-[state=active]:bg-green-800 data-[state=active]:text-white data-[state=active]:shadow-lg border border-gray-300 bg-white text-black"
            >
              Men's Shoes
            </TabsTrigger>
            <TabsTrigger
              value="womens"
              className="px-4 py-2 rounded-md font-medium transition-all duration-300 data-[state=active]:bg-green-800 data-[state=active]:text-white data-[state=active]:shadow-lg border border-gray-300 bg-white text-black"
            >
              Women's Shoes
            </TabsTrigger>
            <TabsTrigger
              value="kids"
              className="px-4 py-2 rounded-md font-medium transition-all duration-300 data-[state=active]:bg-green-800 data-[state=active]:text-white data-[state=active]:shadow-lg border border-gray-300 bg-white text-black"
            >
              Kid's Shoes
            </TabsTrigger>
            <TabsTrigger
              value="newArrivals"
              className="px-4 py-2 rounded-md font-medium transition-all duration-300 data-[state=active]:bg-green-800 data-[state=active]:text-white data-[state=active]:shadow-lg border border-gray-300 bg-white text-black"
            >
              New Arrivals
            </TabsTrigger>
          </TabsList>
        </motion.div>

        {/* Tabs Content */}
        <TabsContent value="mens" className="mt-20 sm:mt-6 md:mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mens.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="rounded-md bg-white shadow hover:shadow-lg transition-shadow hover:scale-105 transform duration-300">
                  <CardContent className="p-0">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={300}
                      height={300}
                      className="w-full rounded-lg h-60 mt-4 lg:h-52 object-cover"
                    />
                  </CardContent>
                  <div className="px-4 py-2">
                    <CardTitle className="text-base font-semibold mb-1">
                      {card.title}
                    </CardTitle>
                    <p className="text-sm font-bold text-red-600 mb-2">
                      {card.amount}
                    </p>
                    <p className="text-xs text-gray-600">Min. order: 2 pieces</p>
                    <p className="text-xs text-gray-600 mb-2">Ready to sell</p>
                    <p className="text-xs text-gray-700 font-medium">
                      Verified
                      <span className="ml-1" role="img" aria-label="verified">
                        ✅
                      </span>
                    </p>
                  </div>
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
        </TabsContent>

        <TabsContent value="womens" className="mt-20 sm:mt-6 md:mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {womens.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="rounded-md bg-white shadow hover:shadow-lg transition-shadow hover:scale-105 transform duration-300">
                  <CardContent className="p-0">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={300}
                      height={300}
                      className="w-full rounded-lg h-60 mt-4 lg:h-52 object-cover"
                    />
                  </CardContent>
                  <div className="px-4 py-2">
                    <CardTitle className="text-base font-semibold mb-1">
                      {card.title}
                    </CardTitle>
                    <p className="text-sm font-bold text-red-600 mb-2">
                      {card.amount}
                    </p>
                    <p className="text-xs text-gray-600">Min. order: 2 pieces</p>
                    <p className="text-xs text-gray-600 mb-2">Ready to sell</p>
                    <p className="text-xs text-gray-700 font-medium">
                      Verified
                      <span className="ml-1" role="img" aria-label="verified">
                        ✅
                      </span>
                    </p>
                  </div>
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
        </TabsContent>

        <TabsContent value="kids" className="mt-20 sm:mt-6 md:mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {kids.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="rounded-md bg-white shadow hover:shadow-lg transition-shadow hover:scale-105 transform duration-300">
                  <CardContent className="p-0">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={300}
                      height={300}
                      className="w-full rounded-lg h-60 mt-4 lg:h-52 object-cover"
                    />
                  </CardContent>
                  <div className="px-4 py-2">
                    <CardTitle className="text-base font-semibold mb-1">
                      {card.title}
                    </CardTitle>
                    <p className="text-sm font-bold text-red-600 mb-2">
                      {card.amount}
                    </p>
                    <p className="text-xs text-gray-600">Min. order: 2 pieces</p>
                    <p className="text-xs text-gray-600 mb-2">Ready to sell</p>
                    <p className="text-xs text-gray-700 font-medium">
                      Verified
                      <span className="ml-1" role="img" aria-label="verified">
                        ✅
                      </span>
                    </p>
                  </div>
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
        </TabsContent>

        <TabsContent value="newArrivals" className="mt-20 sm:mt-6 md:mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="rounded-md bg-white shadow hover:shadow-lg transition-shadow hover:scale-105 transform duration-300">
                  <CardContent className="p-0">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={300}
                      height={300}
                      className="w-full rounded-lg h-60 mt-4 lg:h-52 object-cover"
                    />
                  </CardContent>
                  <div className="px-4 py-2">
                    <CardTitle className="text-base font-semibold mb-1">
                      {card.title}
                    </CardTitle>
                    <p className="text-sm font-bold text-red-600 mb-2">
                      {card.amount}
                    </p>
                    <p className="text-xs text-gray-600">Min. order: 2 pieces</p>
                    <p className="text-xs text-gray-600 mb-2">Ready to sell</p>
                    <p className="text-xs text-gray-700 font-medium">
                      Verified
                      <span className="ml-1" role="img" aria-label="verified">
                        ✅
                      </span>
                    </p>
                  </div>
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
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabImages;