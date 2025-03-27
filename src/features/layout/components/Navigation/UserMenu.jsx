/**
 * UserMenu Component
 *
 * User-related menu:
 * - Profile picture
 * - Username
 * - Dropdown menu
 * - Authentication options
 *
 * Props:
 * - user: UserType
 * - onLogout: function
 */

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "../../../../shared/components/Avatar";
import {
  User,
  Bag,
  Bell,
  Setting,
  Help,
  Logout,
} from "../../../../shared/components/icons/NavigationIcons";

const dummyUser = {
  first_name: "John",
  last_name: "Doe",
  email: "john.doe@example.com",
  src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fuser-profile&psig=AOvVaw3H2ToPfjKao-oMMOFSlF7F&ust=1743166918742000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPCzifCoqowDFQAAAAAdAAAAABAE",
};

function UserMenu() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="relative">
      <button
        className="hover:opacity-80"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <Avatar
          src={dummyUser.avatar_url}
          alt="User Avatar"
          hasNotification={true}
          className="w-8 h-8 rounded-full"
        />
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 top-10 bg-white shadow-lg rounded-lg w-64 overflow-hidden">
          <div className="p-3 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="flex flex-col">
                <span className="font-medium">{`${dummyUser.first_name} ${dummyUser.last_name}`}</span>
                <span className="text-xs text-gray-500">{dummyUser.email}</span>
              </div>
            </div>
          </div>

          <Link
            to="/profile"
            className="px-4 py-2 hover:bg-gray-200 flex items-center"
          >
            <User className="w-5 h-5 mr-2" />
            My Account
          </Link>
          <button className="w-full px-4 py-2 hover:bg-gray-200 flex items-center justify-between text-left">
            <div className="flex items-center">
              <Bag className="w-5 h-5 mr-2" />
              My Orders
            </div>
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          </button>
          <Link
            to="/#"
            className="px-4 py-2 hover:bg-gray-200 flex items-center justify-between"
          >
            <div className="flex items-center">
              <Bell className="w-5 h-5 mr-2" />
              Notifications
            </div>
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          </Link>
          <Link
            to="/#"
            className="px-4 py-2 hover:bg-gray-200 flex items-center"
          >
            <Setting className="w-5 h-5 mr-2" />
            Settings
          </Link>
          <Link
            to="/#"
            className="px-4 py-2 hover:bg-gray-200 flex items-center"
          >
            <Help className="w-5 h-5 mr-2" />
            Help
          </Link>
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-2 hover:bg-gray-200 flex items-center"
          >
            <Logout className="w-5 h-5 mr-2" />
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default UserMenu;
