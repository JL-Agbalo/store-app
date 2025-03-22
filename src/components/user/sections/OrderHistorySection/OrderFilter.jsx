import React from "react";

function OrderFilter({ filters, onFilterChange }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-4">
        <select
          value={filters.status}
          onChange={(e) =>
            onFilterChange({ ...filters, status: e.target.value })
          }
          className="px-4 py-2 text-sm rounded-md border bg-white text-gray-600 cursor-pointer hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <option value="all">All Orders</option>
          <option value="Pending">Pending</option>
          <option value="Processing">Processing</option>
          <option value="Shipped">Shipped</option>
          <option value="Delivered">Delivered</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>
    </div>
  );
}

export default OrderFilter;
