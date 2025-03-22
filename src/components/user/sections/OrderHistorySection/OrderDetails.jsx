import React from "react";
import { Modal } from "../../../common";
import { orderDetails } from "../../../../data/appStoreData";

function OrderDetails({ orderId, isOpen, onClose }) {
  if (orderDetails.orderId !== orderId) {
    return <div>Order not found</div>;
  }

  return (
    // TODO DESIGN THE ORDER DETAILS
    <Modal isOpen={isOpen} onClose={onClose} title="Order Details">
      <div>
        <div>
          <h3>Order Information</h3>
          <div>Order ID: {orderDetails.orderId}</div>
          <div>Date: {orderDetails.orderDate}</div>
          <div>Status: {orderDetails.orderStatus}</div>
          <div>Payment Method: {orderDetails.paymentMethod}</div>
          <div>Total Amount: {orderDetails.totalAmount}</div>
        </div>

        <div>
          <h3>Customer Details</h3>
          <div>{orderDetails.customer.name}</div>
          <div>{orderDetails.customer.email}</div>
          <div>{orderDetails.customer.phone}</div>
          <div>{orderDetails.customer.address}</div>
        </div>

        <div>
          <h3>Products</h3>
          {orderDetails.products.map((product) => (
            <div key={product.id}>
              <div>{product.name}</div>
              <div>Quantity: {product.quantity}</div>
              <div>Price: {product.price}</div>
              <div>Subtotal: {product.subtotal}</div>
            </div>
          ))}
        </div>

        <div>
          <h3>Shipping Information</h3>
          <div>Method: {orderDetails.shipping.method}</div>
          <div>Tracking Number: {orderDetails.shipping.trackingNumber}</div>
          <div>
            Estimated Delivery: {orderDetails.shipping.estimatedDelivery}
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default OrderDetails;
