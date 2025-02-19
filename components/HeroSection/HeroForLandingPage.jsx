"use client"
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const HeroForLandingPage = () => {
  return (
    <div className="w-screen h-screen">
      <Image
        src="/JORDAN+LUKA+3.png"
        width="1920"
        alt="Hero Image"
        height="1080"
        className="w-screen h-screen object-cover"
      />
      <div className="flex flex-col absolute top-0 px-6 py-8 lg:px-16 justify-center h-full">
        <h1 className="text-4xl font-bold lg:text-6xl lg:w-1/2 lg:font-extrabold text-start text-blue-950">
          Welcome to <span className="text-green-800">AJ</span><span className="text-blue-800">ShoeStore</span>
        </h1>
        <p className="lg:w-1/3 text-white font-bold mt-4 text-justify">
          Discover the latest trends in footwear with our wide selection of
          shoes for every occasion. Whether you're looking for casual sneakers,
          elegant heels, or sturdy boots, we have something for everyone.
        </p>
        <div className="mt-8">
          <Link href={"/login"}>
            <Button className="hover:opacity-95 rounded-full px-24 py-6 hover:bg-blue-950 bg-green-900 font-bold text-white">
              GET STARTED
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroForLandingPage;
