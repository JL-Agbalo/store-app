import React from "react";
import { Button } from "../../../common";

const getStatusStyle = (status) => {
  switch (status.toLowerCase()) {
    case "delivered":
      return "bg-green-50 text-green-700 border-green-200";
    case "processing":
      return "bg-blue-50 text-blue-700 border-blue-200";
    case "cancelled":
      return "bg-red-50 text-red-700 border-red-200";
    case "pending":
      return "bg-yellow-50 text-yellow-700 border-yellow-200";
    default:
      return "bg-gray-50 text-gray-600 border-gray-200";
  }
};

const StatusBadge = ({ status }) => (
  <span
    className={`px-2 py-1 text-xs font-medium border rounded-md ${getStatusStyle(
      status
    )}`}
  >
    {status}
  </span>
);

function OrderTable({ orders, onOrderSelect }) {
  return (
    <table className="w-full">
      <thead>
        <tr className="border-b border-gray-100">
          <th className="text-center py-3 px-4 text-xs font-medium text-gray-500 uppercase">
            Order ID
          </th>
          <th className="text-center py-3 px-4 text-xs font-medium text-gray-500 uppercase">
            Order Date
          </th>
          <th className="text-center py-3 px-4 text-xs font-medium text-gray-500 uppercase">
            Status
          </th>
          <th className="text-center py-3 px-4 text-xs font-medium text-gray-500 uppercase">
            Total
          </th>
          <th className="text-center py-3 px-4 text-xs font-medium text-gray-500 uppercase">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr
            key={order.id}
            className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
          >
            <td className="py-3 px-4 text-sm text-gray-950 font-medium text-center">
              #{order.orderId}
            </td>
            <td className="py-3 px-4 text-sm text-gray-500 text-center">
              {order.date}
            </td>
            <td className="py-3 px-4 text-center">
              <span
                className={`px-2 py-1 text-xs font-medium border rounded-md ${getStatusStyle(
                  order.status
                )}`}
              >
                {order.status}
              </span>
            </td>
            <td className="py-3 px-4 text-sm text-gray-900 text-center">
              ${order.totalAmount.toFixed(2)}
            </td>
            <td className="py-3 px-4 text-center">
              <Button>Details</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default OrderTable;
