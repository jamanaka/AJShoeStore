import React from "react";
import ContactUsForm from "../../components/Form/ContactUsForm";
import NavbarForLandingPage from "../../components/Navbar/NavbarForLandingPage";
import Footer from "../../components/Footer/Footer";

const page = () => {
  return (
    <div className="bg-white">
      <NavbarForLandingPage />
      <ContactUsForm />
      <Footer />
    </div>
  );
};

export default page;
