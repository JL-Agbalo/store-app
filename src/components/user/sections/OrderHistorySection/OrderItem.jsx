import React from "react";

function OrderItem({ order, onClick }) {
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="font-medium">Order #{order.id}</h3>
          <p className="text-gray-600 text-sm">{order.date}</p>
        </div>
        <span className="text-green-600 font-medium">
          ${order.total.toFixed(2)}
        </span>
      </div>
      <div className="mt-2">
        <p className="text-sm text-gray-600">Items: {order.items.length}</p>
        <p className="text-sm text-gray-600">Status: {order.status}</p>
        <div className="flex justify-end">
          <button
            onClick={onClick}
            className="text-black font-medium flex items-center hover:underline"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
