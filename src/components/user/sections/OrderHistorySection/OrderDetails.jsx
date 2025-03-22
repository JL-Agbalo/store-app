import React from "react";
import { orderDetails } from "../../../../data/appStoreData";

function OrderDetails({ orderId }) {
  if (orderDetails.orderId !== orderId) {
    return <div>Order not found</div>;
  }

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
    // REDESIGNED AND ADD REUSABLE MODAL
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Order Information</h3>
          <p className="mb-2">Order ID: {orderDetails.orderId}</p>
          <p className="mb-2">Date: {orderDetails.orderDate}</p>
          <p className="mb-2">
            Status:{" "}
            <span className={getStatusColor(orderDetails.orderStatus)}>
              {orderDetails.orderStatus}
            </span>
          </p>
          <p className="mb-2">Payment Method: {orderDetails.paymentMethod}</p>
          <p className="mb-2">Total Amount: {orderDetails.totalAmount}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Details</h3>
          <p className="mb-2">{orderDetails.customer.name}</p>
          <p className="mb-2">{orderDetails.customer.email}</p>
          <p className="mb-2">{orderDetails.customer.phone}</p>
          <p className="mb-2">{orderDetails.customer.address}</p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4">Products</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b">
              <tr>
                <th className="text-left pb-2">Product</th>
                <th className="text-center pb-2">Quantity</th>
                <th className="text-right pb-2">Price</th>
                <th className="text-right pb-2">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {orderDetails.products.map((product) => (
                <tr key={product.id} className="border-b">
                  <td className="py-2">
                    <div className="flex items-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 object-cover mr-3"
                      />
                      <span>{product.name}</span>
                    </div>
                  </td>
                  <td className="text-center">{product.quantity}</td>
                  <td className="text-right">{product.price}</td>
                  <td className="text-right">{product.subtotal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4">Shipping Information</h3>
        <p className="mb-2">Method: {orderDetails.shipping.method}</p>
        <p className="mb-2">
          Tracking Number: {orderDetails.shipping.trackingNumber}
        </p>
        <p className="mb-2">
          Estimated Delivery: {orderDetails.shipping.estimatedDelivery}
        </p>
      </div>
    </div>
  );
}

export default OrderDetails;
