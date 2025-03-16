import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar as Icons } from "../icons/Icons";
import { Avatar } from "../index";
import NavDropdown from "./NavDropdown";
import MobileMenu from "./MobileMenu";
import { CartModal } from "../cart";
import { mainNavLinks } from "../../config/navigation";
import { users } from "../../data/appStoreData";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const hasNotif = true;
  const user = users[0];

  return (
    <nav className="bg-white text-black py-3 sticky top-0 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6">
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Icons.Menu className="w-6 h-6" />
        </button>

        <Link
          to="/"
          className="font-sans text-lg tracking-widest hover:opacity-80 transition-opacity"
        >
          <span className="text-gray-400">Pixel</span>
          <span className="text-black font-medium">Mart</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {mainNavLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="hover:text-gray-400 transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-6">
          {isLoggedIn ? (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center hover:text-gray-400 transition rounded-full "
              >
                <Avatar
                  src={user.image}
                  alt="User Avatar"
                  hasNotification={hasNotif}
                  className="w-8 h-8"
                />
              </button>
              {dropdownOpen && (
                <NavDropdown
                  user={user} // Todo: hide the other data and use the useContext
                  setIsLoggedIn={setIsLoggedIn}
                  setIsCartOpen={setIsCartOpen}
                />
              )}
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

      <MobileMenu
        user={user} // Todo: hide the other data and use the useContext
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setIsCartOpen={setIsCartOpen}
      />

      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={[]}
      />
    </nav>
  );
}

export default Navbar;
