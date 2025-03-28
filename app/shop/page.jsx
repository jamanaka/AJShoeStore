import React from "react";
import Footer from "../../components/Footer/Footer";
import LogoutButton from "@/components/LogoutButton";
import ShopNavbar from "@/components/shop/ShopNavbar";

const page = () => {
  return (
    <div className="">
      <div className="h-[80vh] bg-gradient-to-tr to-blue-900 from-green-900 mb-32 flex items-center justify-center">
        <h1 className="text-white font-bold text-5xl">
          {" "}
          WELCOME TO AJSHOESTORE 
        </h1>
      </div>
    </div>
  );
};

export default page;
