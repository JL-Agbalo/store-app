import React from "react";
import { useNavigate } from "react-router-dom";
import { Cart as Icons } from "../icons/Icons";
import CartList from "./CartList";
import CartTotal from "./CartTotal";

function CartModal({ isOpen, onClose, setIsCartOpen }) {
  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsCartOpen(false); // Close modal when navigating
    navigate("/checkout");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full h-full md:h-auto md:max-w-4xl bg-white shadow-xl md:rounded-2xl transform transition-all duration-300">
        <div className="flex flex-col h-full md:max-h-[85vh]">
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <Icons.Bag className="w-5 h-5" />
              <h2 className="text-lg font-semibold">Shopping Cart</h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 hover:opacity-70 transition-opacity"
            >
              <Icons.Close className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="flex flex-col md:flex-row flex-1">
            {/* Left Column - Cart Items */}
            <div className="md:w-2/3">
              <div className="px-6 pb-6 overflow-y-auto max-h-[60vh] md:max-h-[55vh]">
                <CartList />
              </div>
            </div>

            {/* Right Column - Total & Actions */}
            <div className="md:w-1/2 md:rounded-r-2xl">
              <div className="p-6 pt-3 sticky top-0">
                <CartTotal />
                <div className="mt-6 space-y-3">
                  <button
                    onClick={handleCheckout}
                    className="w-full bg-black text-white py-2 rounded-xl hover:bg-gray-900 transition duration-300 font-medium text-base"
                  >
                    Proceed to Checkout
                  </button>
                  <button
                    onClick={onClose}
                    className="w-full text-center text-black hover:text-gray-600 hover:underline py-2 transition-colors"
                  >
                    Continue Shopping →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
