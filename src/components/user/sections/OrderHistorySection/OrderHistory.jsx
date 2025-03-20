import React, { useState } from "react";
import { orderHistory } from "../../../../data/appStoreData";
import { OrderList, OrderDetails, OrderFilter } from ".";

function OrderHistory() {
  const [filter, setFilter] = useState("all");
  const [selectedOrder, setSelectedOrder] = useState(null);

  const filterOrders = (orders) => {
    if (filter === "all") return orders;
    return orders.filter((order) => order.status === filter);
  };

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
  };

  const handleBack = () => {
    setSelectedOrder(null);
  };

  return (
    <section className="max-w-3xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium text-gray-900">Orders</h2>
        {!selectedOrder && (
          <OrderFilter filter={filter} onFilterChange={setFilter} />
        )}
      </div>
      {selectedOrder ? (
        <OrderDetails order={selectedOrder} onBack={handleBack} />
      ) : (
        <OrderList
          orders={filterOrders(orderHistory)}
          onOrderClick={handleOrderClick}
        />
      )}
    </section>
  );
}

export default OrderHistory;
