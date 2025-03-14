import React from "react";
import { Cart as Icons } from "../icons/Icons";
import CartList from "./CartList";
import CartTotal from "./CartTotal";

function CartModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-black/5 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="absolute inset-y-0 right-0 max-w-md w-full bg-white/95 backdrop-blur-sm shadow-xl transform transition-transform duration-300">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6">
            <div className="flex items-center">
              <Icons.Bag className="w-6 h-6 mr-2" />
              <h2 className="text-xl font-medium">Cart</h2>
            </div>
            <button onClick={onClose} className="p-2 hover:text-gray-500">
              <Icons.Close className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto px-6">
            <CartList />
          </div>

          {/* Cart Total & Checkout */}
          <div className="p-6 bg-gray-50/50">
            <CartTotal />
            <div className="mt-6 space-y-3">
              <button className="w-full bg-black text-white py-3.5 rounded-lg hover:bg-gray-900 transition duration-300 font-medium">
                Checkout
              </button>
              <button
                onClick={onClose}
                className="w-full text-center text-black-600 hover:text-gray-800 hover:underline text-sm py-2"
              >
                Continue Shopping →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
