import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavbarIcons as Icons } from "../icons";
import { Avatar } from "../index";
import NavDropdown from "./NavDropdown";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const cartCount = 5;
  const notificationCount = 3;
  const messageCount = 0;

  return (
    <nav className="bg-white text-black py-3 sticky top-0 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          Store App
        </Link>

        {/* Navigation Icons */}
        <div className="flex space-x-6 items-center">
          {isLoggedIn ? (
            <>
              <Link to="/" className="hover:text-gray-400 transition">
                <Icons.Home className="w-5 h-5" />
              </Link>
              <Link to="/#" className="relative hover:text-gray-400 transition">
                <Icons.Cart className="w-5 h-5" />
                {cartCount > 0 && (
                  <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2">
                    {cartCount}
                  </div>
                )}
              </Link>
              <Link to="/#" className="relative hover:text-gray-400 transition">
                <Icons.Message className="w-5 h-5" />
                {messageCount > 0 && (
                  <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2">
                    {messageCount}
                  </div>
                )}
              </Link>
              <Link to="/#" className="relative hover:text-gray-400 transition">
                <Icons.Notification className="w-5 h-5" />
                {notificationCount > 0 && (
                  <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2">
                    {notificationCount}
                  </div>
                )}
              </Link>
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center hover:text-gray-400 transition rounded-full bg-gray-800"
                >
                  <Avatar
                    src="https://i.imgur.com/DTfowdu.jpg"
                    alt="User Avatar"
                  />
                </button>
                {dropdownOpen && <NavDropdown setIsLoggedIn={setIsLoggedIn} />}
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-gray-400 transition">
                Login
              </Link>
              <Link to="/signup" className="hover:text-gray-400 transition">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
