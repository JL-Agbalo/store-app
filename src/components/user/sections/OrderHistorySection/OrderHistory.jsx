import React, { useState } from "react";
import { orderHistory } from "../../../../data/appStoreData";
import { OrderList, OrderDetails, OrderFilter } from ".";

function OrderHistory() {
  const [filters, setFilters] = useState({
    status: "all",
  });
  const [selectedOrder, setSelectedOrder] = useState(null);

  const filterOrders = (orders) => {
    if (filters.status === "all") return orders;
    return orders.filter((order) => order.status === filters.status);
  };

  const handleBack = () => {
    setSelectedOrder(null);
  };

  return (
    <section className="p-5">
      <h2 className="text-xl font-semibold mb-4">Order History</h2>
      <div>
        <div className="mb-8">
          {!selectedOrder && (
            <OrderFilter filters={filters} onFilterChange={setFilters} />
          )}
          <div className="bg-white border border-gray-100 rounded-sm">
            {selectedOrder ? (
              <OrderDetails order={selectedOrder} onBack={handleBack} />
            ) : (
              <OrderList orders={filterOrders(orderHistory)} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrderHistory;
