import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "../common";
import { Navbar as Icons } from "../icons/Icons";
import { mainNavLinks, userNavLinks } from "../../config/navigation";

function MobileMenu({
  isOpen,
  onClose,
  isLoggedIn,
  setIsLoggedIn,
  setIsCartOpen,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 md:hidden">
      <div className="flex justify-between items-center p-2 shadow-md">
        <h2 className="text-xl font-semibold">Menu</h2>
        <button onClick={onClose} className="p-2">
          <Icons.Close className="w-6 h-6" />
        </button>
      </div>

      <div className="p-4">
        <div className="space-y-4">
          {isLoggedIn && (
            <div className="flex items-center gap-4 mb-6">
              <Avatar
                src="https://i.imgur.com/DTfowdu.jpg"
                alt="User Avatar"
                hasNotification={true}
                className="w-14 h-14"
              />
              <div className="flex flex-col">
                <span className="font-medium text-lg">Marisa Santos</span>
                <span className="text-sm text-gray-500">fish@gmail.com</span>
              </div>
            </div>
          )}

          {/* Main Navigation Links */}
          {mainNavLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block py-2 hover:text-gray-600"
              onClick={onClose}
            >
              <link.icon className="w-5 h-5 inline mr-3" />
              {link.label}
            </Link>
          ))}

          {/* Rest of the menu items */}
          {isLoggedIn && (
            <>
              <div className="h-px bg-gray-200 my-4"></div>
              {userNavLinks.map((link) =>
                link.label === "My Orders" || link.label === "Notifications" ? (
                  <button
                    key={link.to}
                    onClick={() => {
                      setIsCartOpen(true);
                      onClose();
                    }}
                    className="w-full text-left py-2 hover:text-gray-600 flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <link.icon className="w-5 h-5 inline mr-3" />
                      {link.label}
                    </div>
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </button>
                ) : (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="block py-2 hover:text-gray-600"
                  >
                    <link.icon className="w-5 h-5 inline mr-3" />
                    {link.label}
                  </Link>
                )
              )}
              <button
                onClick={() => {
                  setIsLoggedIn(false);
                  onClose();
                }}
                className="block w-full text-left py-2"
              >
                <Icons.Logout className="w-5 h-5 inline mr-3" />
                Logout
              </button>
            </>
          )}

          {!isLoggedIn && (
            <>
              <div className="h-px bg-gray-200 my-4"></div>
              <Link
                to="/login"
                className="block py-2 hover:text-gray-600"
                onClick={onClose}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="block py-2 hover:text-gray-600"
                onClick={onClose}
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
