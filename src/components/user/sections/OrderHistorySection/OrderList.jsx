import React from "react";
import OrderTable from "./OrderTable";

function OrderList({ orders }) {
  if (!orders.length) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No orders found</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <OrderTable orders={orders} />
    </div>
  );
}

export default OrderList;
