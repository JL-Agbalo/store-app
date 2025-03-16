import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar as Icons } from "../icons/Icons";
import { Dropdown } from "../index";

function NavDropdown({ setIsLoggedIn, setIsCartOpen, setDropdownOpen, user }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/login");
  };

  const handleCartOpen = () => {
    setIsCartOpen(true); // Open cart modal
    setDropdownOpen(false); // Close dropdown menu
  };

  return (
    <Dropdown>
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <span className="font-medium">{user.name}</span>
            <span className="text-xs text-gray-500">{user.email}</span>
          </div>
        </div>
      </div>

      <Link to="/#" className="px-4 py-2 hover:bg-gray-200 flex items-center">
        <Icons.User className="mr-2" />
        My Account
      </Link>
      <button
        onClick={handleCartOpen}
        className="w-full px-4 py-2 hover:bg-gray-200 flex items-center justify-between text-left"
      >
        <div className="flex items-center">
          <Icons.Bag className="mr-2" />
          My Orders
        </div>
        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
      </button>
      <Link
        to="/#"
        className="px-4 py-2 hover:bg-gray-200 flex items-center justify-between"
      >
        <div className="flex items-center">
          <Icons.Bell className="mr-2" />
          Notifications
        </div>
        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
      </Link>
      <Link to="/#" className="px-4 py-2 hover:bg-gray-200 flex items-center">
        <Icons.Setting className="mr-2" />
        Settings
      </Link>
      <Link to="/#" className="px-4 py-2 hover:bg-gray-200 flex items-center">
        <Icons.Help className="mr-2" />
        Help
      </Link>

      <button
        onClick={handleLogout}
        className="w-full text-left px-4 py-2 hover:bg-gray-200 flex items-center rounded-b-lg "
      >
        <Icons.Logout className="mr-2" />
        Logout
      </button>
    </Dropdown>
  );
}

export default NavDropdown;
