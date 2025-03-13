import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar as Icons } from "../icons/Icons";
import { Dropdown } from "../index";

function NavDropdown({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <Dropdown>
      <div className="px-4 py-2 border-b border-gray-200">
        <span className="block font-semibold">Marisa Santos</span>
      </div>
      <Link to="/#" className="px-4 py-2 hover:bg-gray-200 flex items-center">
        <Icons.Profile className="mr-2" />
        My Account
      </Link>
      <Link to="/#" className="px-4 py-2 hover:bg-gray-200 flex items-center">
        <Icons.Cart className="mr-2" />
        My Orders
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
        className="w-full text-left px-4 py-2 hover:bg-gray-200 flex items-center rounded-b-lg"
      >
        <Icons.Logout className="mr-2" />
        Logout
      </button>
    </Dropdown>
  );
}

export default NavDropdown;
