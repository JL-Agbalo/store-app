import React, { useState } from "react";
import { UserProfile as Icons } from "../../../icons/Icons";

function ChangePassword() {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="my-4">
      <h3 className="text-base font-medium text-gray-800 mb-2">
        Change Password
      </h3>
      <div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Current Password</label>
          <div className="relative">
            <input
              type="password"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
              placeholder="********"
            />
            <Icons.Eye className="w-4 h-4 absolute right-2.5 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          <p className="text-sm text-gray-500 mt-1">
            Enter your current password to verify it's you.
          </p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">New Password</label>
          <div className="relative">
            <input
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
              placeholder="********"
            />
            <Icons.Eye className="w-4 h-4 absolute right-2.5 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          <p className="text-sm text-gray-500 mt-1">
            Password must be at least 8 characters long with 1 uppercase letter,
            1 number, and 1 special character.
          </p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">
            Confirm New Password
          </label>
          <div className="relative">
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
              placeholder="********"
            />
            <Icons.Eye className="w-4 h-4 absolute right-2.5 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          <p className="text-sm text-gray-500 mt-1">
            Re-enter your new password to confirm.
          </p>
        </div>
      </div>
      <div className="flex justify-end pt-2">
        <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors">
          Update Password
        </button>
      </div>
    </div>
  );
}

export default ChangePassword;
