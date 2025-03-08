import React from "react";

function Avatar({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="w-8 h-8 rounded-full object-cover border-1 border-white"
    />
  );
}

export default Avatar;
