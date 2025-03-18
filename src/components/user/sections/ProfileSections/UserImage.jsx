import React from "react";

function UserImage({ user }) {
  return (
    <div className="flex items-center gap-4">
      <img
        src={user.image}
        alt={user.name}
        className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
      />
      <div className="space-y-2">
        <div className="flex gap-2">
          <button className="px-2 py-1 text-sm border border-black text-black rounded-lg hover:bg-black hover:text-white transition-colors">
            Change Photo
          </button>
          <button className="px-2 py-1 text-sm text-red-600 border border-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-colors">
            Remove
          </button>
        </div>
        <p className="text-xs text-gray-500">
          Square JPG, PNG, or GIF (1000px min)
        </p>
      </div>
    </div>
  );
}

export default UserImage;
