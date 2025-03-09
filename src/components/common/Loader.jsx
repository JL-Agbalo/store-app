import React from "react";

function Loader() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {[...Array(4)].map((_, index) => (
        <div key={index} className="group animate-pulse">
          <div className="aspect-square w-full rounded-lg bg-gray-200 xl:aspect-7/8"></div>
          <div className="mt-4 h-4 w-3/4 bg-gray-200 rounded"></div>
          <div className="mt-2 h-4 w-1/2 bg-gray-200 rounded"></div>
          <div className="mt-1 h-6 w-1/4 bg-gray-200 rounded"></div>
        </div>
      ))}
    </div>
  );
}

export default Loader;
