import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavbarIcons as Icons } from "../icons";
import { DropdownMenu, Avatar } from "../index";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4 sticky top-0 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
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
              <Link to="/#" className="hover:text-gray-400 transition">
                <Icons.Cart className="w-5 h-5" />
              </Link>
              <Link to="/#" className="hover:text-gray-400 transition">
                <Icons.Message className="w-5 h-5" />
              </Link>
              <Link to="/#" className="hover:text-gray-400 transition">
                <Icons.Notification className="w-5 h-5" />
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
                {dropdownOpen && <DropdownMenu setIsLoggedIn={setIsLoggedIn} />}
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
