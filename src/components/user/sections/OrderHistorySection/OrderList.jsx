import React from "react";
import { OrderItem } from ".";
function OrderList({ orders, onOrderClick }) {
  if (!orders.length) {
    return (
      <div className="text-center py-8 bg-gray-50 rounded-lg">
        <p className="text-gray-500">No orders found</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {orders.map((order) => (
        <OrderItem
          key={order.id}
          order={order}
          onClick={() => onOrderClick(order)}
        />
      ))}
    </div>
  );
}

export default OrderList;
