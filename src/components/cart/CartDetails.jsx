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
      <div className="flex flex-col md:flex-row flex-1">
        {/* Left Column - Cart Items */}
        <div className="md:w-2/3">
          <div className="overflow-y-auto max-h-[60vh] md:max-h-[55vh]">
            <CartList />
          </div>
        </div>

        {/* Right Column - Total & Actions */}
        <div className="md:w-1/2 md:rounded-r-2xl">
          <div className="pt-3 sticky top-0">
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
    </Modal>
  );
}

export default CartDetails;
