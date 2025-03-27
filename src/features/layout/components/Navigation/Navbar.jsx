import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Bag } from "../../../../shared/components/icons/NavigationIcons";
import UserMenu from "./UserMenu";

function Navbar({ isAuthenticated = false }) {
  return (
    <nav className="bg-white text-black py-3 sticky top-0 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6">
        <button className="md:hidden">
          <Menu className="w-6 h-6" />
        </button>
        <Link
          to="/"
          className="font-sans text-lg tracking-widest hover:opacity-80 transition-opacity"
        >
          <span className="text-gray-400">Pixel</span>
          <span className="text-black font-medium">Mart</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="hover:text-gray-400 transition">
            Home
          </Link>
          <Link to="/products" className="hover:text-gray-400 transition">
            Products
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          {isAuthenticated ? (
            <div className="flex items-center space-x-4 relative">
              <Link to="/cart" className="hover:opacity-80">
                <Bag className="w-6 h-6" />
              </Link>
              <UserMenu />
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link to="/login" className="hover:text-gray-400 transition">
                Login
              </Link>
              <span>|</span>
              <Link to="/signup" className="hover:text-gray-400 transition">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
