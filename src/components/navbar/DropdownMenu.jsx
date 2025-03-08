import React from "react";
import { Link } from "react-router-dom";
import { NavbarIcons } from "../icons";

function DropdownMenu({ setIsLoggedIn }) {
  return (
    <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-sm">
      <div className="px-4 py-2 border-b border-gray-200">
        <span className="block font-semibold">John Doe</span>
      </div>
      <Link to="/#" className="px-4 py-2 hover:bg-gray-200 flex items-center">
        <NavbarIcons.Profile className="mr-2" />
        My Account
      </Link>
      <Link to="/#" className="px-4 py-2 hover:bg-gray-200 flex items-center">
        <NavbarIcons.Cart className="mr-2" />
        My Orders
      </Link>
      <Link to="/#" className="px-4 py-2 hover:bg-gray-200 flex items-center">
        <NavbarIcons.Setting className="mr-2" />
        Settings
      </Link>
      <Link to="/#" className="px-4 py-2 hover:bg-gray-200 flex items-center">
        <NavbarIcons.Help className="mr-2" />
        Help
      </Link>
      <button
        onClick={() => setIsLoggedIn(false)}
        className="w-full text-left px-4 py-2 hover:bg-gray-200 flex items-center"
      >
        <NavbarIcons.Logout className="mr-2" />
        Logout
      </button>
    </div>
  );
}

export default DropdownMenu;
