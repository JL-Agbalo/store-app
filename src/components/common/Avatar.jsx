import React from "react";

function Avatar({ src, alt, hasNotification }) {
  return (
    <div className="relative">
      <img src={src} alt={alt} className="w-6 h-6 rounded-full object-cover" />
      {hasNotification && (
        <div className="absolute inline-flex items-center justify-center w-3 h-3 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-1 -end-1"></div>
      )}
    </div>
  );
}

export default Avatar;
