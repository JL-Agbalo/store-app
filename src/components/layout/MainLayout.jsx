import React from "react";
import { Navbar, Footer } from "../index";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />
      {/* Page Content */}
      <main className="flex-grow">{children}</main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
