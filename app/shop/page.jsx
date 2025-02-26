import React from 'react';
import Footer from '../../components/Footer/Footer';
import ProtectedRoute from "@/components/ProtectedRoute";
import LogoutButton from "@/components/LogoutButton"

const page = () => {
  return (
    <ProtectedRoute>
      <div>
        <h1>Welcome to the Dashboard!</h1>
        <p>This page is only accessible to logged-in users.</p>
        <LogoutButton />
      </div>
      <Footer />
    </ProtectedRoute>
  );
};

export default page;