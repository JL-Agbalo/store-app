import React from "react";
import { Link } from "react-router-dom";

function DropdownMenu({ setIsLoggedIn }) {
  return (
    <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-sm">
      <div className="px-4 py-2 border-b border-gray-200">
        <span className="block font-semibold">John Doe</span>
      </div>
      <Link to="/#" className="block px-4 py-2 hover:bg-gray-200">
        My Account
      </Link>
      <Link to="/#" className="block px-4 py-2 hover:bg-gray-200">
        My Orders
      </Link>
      <Link to="/#" className="block px-4 py-2 hover:bg-gray-200">
        Settings
      </Link>
      <Link to="/#" className="block px-4 py-2 hover:bg-gray-200">
        Help
      </Link>
      <button
        onClick={() => setIsLoggedIn(false)}
        className="block w-full text-left px-4 py-2 hover:bg-gray-200"
      >
        Logout
      </button>
    </div>
  );
}

export default DropdownMenu;
