import React from "react";
import Avatar from "./Avatar";

function UserProfileCard({ user, avatarProps }) {
  return (
    <div className="flex items-center space-x-3">
      <Avatar {...avatarProps} />
      <div>
        <h3 className="font-medium">{user.name}</h3>
        <p className="text-sm text-gray-500">{user.email}</p>
      </div>
    </div>
  );
}

export default UserProfileCard;
