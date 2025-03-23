import React from "react";
import { useNavigate } from "react-router-dom";
import { Cart as Icons } from "../icons/Icons";
import CartList from "./CartList";
import CartTotal from "./CartTotal";
import Modal from "../common/Modal";

function CartDetails({ isOpen, onClose, setIsCartOpen }) {
  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate("/checkout");
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Shopping Cart"
      icon={Icons.Bag}
    >
      <div className="flex flex-col md:flex-row md:gap-6">
        {/* Left Column - Cart Items */}
        <div className="flex-1 min-w-0">
          <div className="overflow-y-auto max-h-[60vh] md:max-h-[55vh]">
            <CartList />
          </div>
        </div>

        {/* Right Column - Total & Actions */}
        <div className="w-full md:w-[380px] flex-shrink-0 mt-6 md:mt-5">
          <div className="sticky top-0">
            <CartTotal />
            <div className="mt-4 space-y-3 px-2 md:px-0">
              <button
                onClick={handleCheckout}
                className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-900 transition duration-300 font-medium text-sm"
              >
                Proceed to Checkout
              </button>
              <button
                onClick={onClose}
                className="w-full text-center text-gray-500 hover:text-black py-2 transition-colors text-sm"
              >
                Continue Shopping →
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default CartDetails;
