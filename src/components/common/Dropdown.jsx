import React from "react";

function Dropdown({ children }) {
  return (
    <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-md">
      {children}
    </div>
  );
}

export default Dropdown;
