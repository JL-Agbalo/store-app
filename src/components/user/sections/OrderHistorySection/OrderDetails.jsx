import React from "react";
import { Modal } from "../../../common";
import { orderDetails } from "../../../../data/order/orderDetails";
import ActionButtons from "./ActionButtons";

function OrderDetails({ orderId, isOpen, onClose }) {
  if (orderDetails.orderId !== orderId) return <div>Order not found</div>;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Order Details">
      <div className="grid md:grid-cols-2 gap-6 py-6">
        {/* Left Column - Order & Customer Info */}
        <div className="bg-gray-100 rounded-lg">
          {/* Order Information */}
          <div className="p-5">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Order Information
            </h3>
            <div>
              <div className="flex justify-between text-base mb-2">
                <span className="text-gray-500">Order ID:</span>
                <span className="text-gray-900 font-medium">
                  {orderDetails.orderId}
                </span>
              </div>
              <div className="flex justify-between text-base mb-2">
                <span className="text-gray-500">Date:</span>
                <span className="text-gray-900">{orderDetails.orderDate}</span>
              </div>
              <div className="flex justify-between text-base mb-2">
                <span className="text-gray-500">Status:</span>
                <span className="text-gray-900">
                  {orderDetails.orderStatus}
                </span>
              </div>
              <div className="flex justify-between text-base mb-2">
                <span className="text-gray-500">Payment:</span>
                <span className="text-gray-900">
                  {orderDetails.paymentMethod}
                </span>
              </div>
              <div className="flex justify-between text-base">
                <span className="text-gray-500">Total Amount:</span>
                <span className="text-gray-900 font-semibold">
                  ${orderDetails.totalAmount.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {/* Customer Details */}
          <div className="p-5">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Customer Details
            </h3>
            <div>
              <div className="mb-4">
                <div className="text-base font-medium text-gray-900">
                  {orderDetails.customer.name}
                </div>
                <div className="text-base text-gray-500 mt-1">
                  {orderDetails.customer.email}
                </div>
                <div className="text-base text-gray-500 mt-1">
                  {orderDetails.customer.phone}
                </div>
                <div className="text-base text-gray-500 mt-1">
                  {orderDetails.customer.address}
                </div>
              </div>
              <div>
                <h4 className="text-base font-medium text-gray-900 mb-2">
                  Shipping Details
                </h4>
                <div className="text-base text-gray-500">
                  {orderDetails.shipping.method}
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  <div>Tracking: {orderDetails.shipping.trackingNumber}</div>
                  <div>Expected: {orderDetails.shipping.estimatedDelivery}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Products */}
        <div className="p-5">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Products</h3>
          <div className="h-[400px] overflow-y-auto mb-4">
            {orderDetails.products.map((product, index) => (
              <div
                key={product.id}
                className={`flex gap-4 p-2 rounded-lg hover:bg-gray-50 hover:text-black transition-colors ${
                  index > 0 ? "mt-6" : ""
                }`}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="text-base font-medium text-gray-900">
                        {product.name}
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">
                        Quantity: {product.quantity} × $
                        {product.price.toFixed(2)}
                      </p>
                    </div>
                    <span className="text-base font-semibold text-gray-900">
                      ${product.subtotal.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="pt-4 border-t border-gray-200">
            <div className="flex justify-between text-base font-semibold">
              <span>Total</span>
              <span>${orderDetails.totalAmount.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <ActionButtons />
    </Modal>
  );
}

export default OrderDetails;
