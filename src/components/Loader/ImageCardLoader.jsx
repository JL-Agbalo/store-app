import React from "react";

const ImageCardLoader = () => {
  return (
    <div className="group transform hover:scale-102 transition-transform duration-300 cursor-pointer">
      <div className="aspect-square w-full rounded-lg bg-gray-200 animate-pulse"></div>
      <h3 className="mt-4 text-sm text-gray-700 truncate max-w-full bg-gray-200 animate-pulse h-5"></h3>
      <p className="text-sm text-gray-500 bg-gray-200 animate-pulse h-5 mt-1"></p>
      <p className="mt-1 text-lg font-medium text-gray-900 bg-gray-200 animate-pulse h-6"></p>
    </div>
  );
};

export default ImageCardLoader;
