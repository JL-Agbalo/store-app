import React from "react";

function OrderFilter({ filter, onFilterChange }) {
  return (
    <select
      className="text-sm border-0 bg-gray-50 rounded px-4 py-1 focus:ring-0"
      value={filter}
      onChange={(e) => onFilterChange(e.target.value)}
    >
      <option value="all">All</option>
      <option value="pending">Pending</option>
      <option value="processing">Processing</option>
      <option value="shipped">Shipped</option>
      <option value="delivered">Delivered</option>
    </select>
  );
}

export default OrderFilter;
