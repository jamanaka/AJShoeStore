"use client";

import React from "react";
import Footer from "../../../components/Footer/Footer";
import LoginForm from "../../../components/Form/LoginForm";
import ProtectedRouteIfLogin from "@/components/ProtectedRouteIfLogin";

const page = () => {
  return (
      <div className="bg-white">
        <LoginForm />
        <Footer />
      </div>
  );
};

export default page;
