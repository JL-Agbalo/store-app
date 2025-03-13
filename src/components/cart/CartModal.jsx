import React, { useState } from "react";
import CartItem from "./CartItem";
import { products } from "../../data/ProductData";
import { CartIcons as Icons } from "../icons";

const CartModal = ({ isOpen, onClose }) => {
  const [cartItems, setCartItems] = useState(products.slice(0, 6));
  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const shipping = subtotal > 0 ? 5.99 : 0;
  const total = subtotal + shipping;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/5 backdrop-blur-sm p-4 z-50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-6xl relative overflow-hidden">
        {/* Header */}
        <div className="p-8">
          <button
            onClick={onClose}
            className="absolute top-8 right-8 text-gray-400 hover:text-black transition-colors"
            aria-label="Close"
          >
            X
          </button>
          <h2 className="text-2xl font-semibold text-gray-900">
            Shopping Cart
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 p-8 pt-0">
          {/* Shopping Cart Section */}
          <div className="md:col-span-2 space-y-6">
            <div className="grid grid-cols-5 text-gray-500 text-base font-medium pb-4">
              <p className="col-span-2">Product</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
            </div>
            <div className="max-h-96 overflow-y-auto space-y-6 pr-4">
              {cartItems.length > 0 ? (
                cartItems.map((item) => <CartItem key={item.id} item={item} />)
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-gray-400">
                  <Icons.Bag className="h-6 w-6" />
                  <p className="text-lg">Your cart is empty</p>
                </div>
              )}
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Order Summary
            </h3>
            <div className="space-y-4 text-base">
              <div className="flex justify-between">
                <span className="text-gray-600">Items</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">${shipping.toFixed(2)}</span>
              </div>
              <div className="pt-4 mt-4 flex justify-between">
                <span className="text-gray-900 font-semibold">Total Cost</span>
                <span className="text-gray-900 font-semibold text-xl">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Promo Code Input */}
            <div className="mt-8 space-y-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Have a promo code?
              </label>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Enter code"
                  className="flex-1 bg-white rounded-l-lg py-2 px-4 focus:outline-none text-base"
                />
                <button className="bg-black text-white px-3 rounded-r-lg text-base font-medium hover:bg-gray-800 transition-colors">
                  Apply
                </button>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              className="mt-15 w-full bg-black text-white py-2 rounded-xl text-base font-medium hover:bg-gray-800 transition-colors flex items-center justify-center"
              onClick={onClose}
            >
              <span>Proceed to Checkout →</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
