import React from "react";
import { Navbar, Footer } from "../index";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />
      {/* Page Content */}
      <main className="flex-grow pb-10 md:pb-10">{children}</main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
