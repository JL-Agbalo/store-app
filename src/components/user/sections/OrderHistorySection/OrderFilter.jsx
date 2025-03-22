import React, { useState, useRef } from "react";
import { Common as Icons } from "../../../icons/Icons";
function OrderFilter({ filters, onFilterChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const options = [
    { value: "all", label: "All Orders" },
    { value: "Pending", label: "Pending" },
    { value: "Processing", label: "Processing" },
    { value: "Shipped", label: "Shipped" },
    { value: "Delivered", label: "Delivered" },
    { value: "Cancelled", label: "Cancelled" },
  ];

  return (
    <div className="mb-6">
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-48 px-4 py-2 text-sm border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400"
        >
          <span>
            {options.find((opt) => opt.value === filters.status)?.label ||
              "All Orders"}
          </span>
          <Icons.ArrowDown
            className={`w-5 h-5 transition-transform ${
              isOpen ? "transform rotate-180" : ""
            }`}
          />
        </button>

        {isOpen && (
          <div className="absolute z-10 w-48 mt-1 bg-white border border-gray-200 rounded-md shadow-sm">
            {options.map((option) => (
              <div
                key={option.value}
                className={`px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer ${
                  filters.status === option.value
                    ? "bg-gray-50 font-medium"
                    : ""
                }`}
                onClick={() => {
                  onFilterChange({ ...filters, status: option.value });
                  setIsOpen(false);
                }}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default OrderFilter;
