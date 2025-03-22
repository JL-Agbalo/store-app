import React, { useState } from "react";
import { orderHistory } from "../../../../data/appStoreData";
import { OrderTable, OrderDetails, OrderFilter } from ".";

function OrderHistory() {
  const [filters, setFilters] = useState({
    status: "all",
  });
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const filterOrders = (orders) => {
    if (filters.status === "all") return orders;
    return orders.filter((order) => order.status === filters.status);
  };

  const handleSelectOrder = (orderId) => {
    console.log("Selected order:", orderId); // Add this line for debugging
    setSelectedOrderId(orderId);
  };

  return (
    <section className="p-5">
      <h2 className="text-xl font-semibold mb-4">Order History</h2>
      <div>
        <div className="mb-8">
          <OrderFilter filters={filters} onFilterChange={setFilters} />
          <div className="bg-white border border-gray-100 rounded-sm">
            <div className="overflow-x-auto">
              {filterOrders(orderHistory).length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">No orders found</p>
                </div>
              ) : (
                <OrderTable
                  orders={filterOrders(orderHistory)}
                  onSelectOrder={handleSelectOrder}
                />
              )}
            </div>
          </div>
        </div>
        {selectedOrderId && <OrderDetails orderId={selectedOrderId} />}
      </div>
    </section>
  );
}

export default OrderHistory;
