import React from "react";

function OrderDetails({ order, onBack }) {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "delivered":
        return "text-green-700";
      case "processing":
        return "text-blue-700";
      case "cancelled":
        return "text-red-700";
      case "pending":
        return "text-yellow-700";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6">
        <button onClick={onBack} className="flex items-center gap-2">
          &larr; Back to Orders
        </button>
        <div className="space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-medium">Order #{order.id}</h3>
              <p className="text-gray-600">{order.date}</p>
            </div>
            <span className="text-green-600 font-medium">
              ${order.total.toFixed(2)}
            </span>
          </div>
          <div className="border-t pt-4">
            <h4 className="font-medium mb-2">Order Items</h4>
            {order.items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center py-2"
              >
                <span className="text-gray-600">{item.name}</span>
                <span className="text-gray-900">${item.price.toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="border-t pt-4">
            <p className={`${getStatusColor(order.status)}`}>
              Status: {order.status}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
