import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navigation/Navbar";

/**
 * MainLayout Component
 *
 * Main application wrapper that should include:
 * - Navbar
 * - Sidebar (if needed)
 * - Main content area
 * - Footer
 * - Toast notifications container
 *
 * Props:
 * - children: React.ReactNode
 */

function MainLayout({ isAuthenticated }) {
  return (
    <div>
      <Navbar isAuthenticated={isAuthenticated} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
