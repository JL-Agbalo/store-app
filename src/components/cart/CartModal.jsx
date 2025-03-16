import React, { useState } from "react";
import { Cart as Icons } from "../icons/Icons";
import CartList from "./CartList";
import CartTotal from "./CartTotal";
import { CheckoutForm } from "../checkout";

function CartModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1); // 1: Cart, 2: Shipping, 3: Payment

  const steps = [
    { id: 1, name: "Cart" },
    { id: 2, name: "Shipping" },
    { id: 3, name: "Payment" },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full h-full md:h-auto md:max-w-4xl bg-white shadow-xl md:rounded-2xl transform transition-all duration-300">
        <div className="flex flex-col h-full md:max-h-[85vh]">
          {/* Header with Steps */}
          <div className="border-b border-gray-200">
            <div className="flex items-center justify-between p-5">
              <div className="flex items-center space-x-2">
                <Icons.Bag className="w-5 h-5" />
                <h2 className="text-lg font-semibold">
                  {steps.find((s) => s.id === step).name}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 hover:opacity-70 transition-opacity"
              >
                <Icons.Close className="w-5 h-5" />
              </button>
            </div>

            {/* Steps Indicator */}
            <div className="flex items-center px-5 pb-4">
              {steps.map((s, i) => (
                <React.Fragment key={s.id}>
                  <div
                    className={`flex items-center ${
                      s.id === step ? "text-black" : "text-gray-400"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-medium ${
                        s.id === step
                          ? "border-black text-black"
                          : "border-gray-300"
                      }`}
                    >
                      {s.id}
                    </div>
                    <span className="ml-2 text-sm font-medium">{s.name}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-24 h-px bg-gray-200 mx-2" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Content - Split into two columns */}
          <div className="flex flex-col md:flex-row flex-1">
            {/* Left Column - Cart Items/Checkout Form */}
            <div className="md:w-2/3">
              <div className="px-6 pb-6 overflow-y-auto max-h-[60vh] md:max-h-[55vh]">
                {step === 1 ? (
                  <CartList />
                ) : (
                  <CheckoutForm step={step === 2 ? 1 : 2} />
                )}
              </div>
            </div>

            {/* Right Column - Total & Actions */}
            <div className="md:w-1/2 md:rounded-r-2xl">
              <div className="p-6 pt-3 sticky top-0">
                <CartTotal />
                <div className="mt-6 space-y-3">
                  {step === 1 && (
                    <button
                      onClick={() => setStep(2)}
                      className="w-full bg-black text-white py-2 rounded-xl hover:bg-gray-900 transition duration-300 font-medium text-base"
                    >
                      Proceed to Checkout
                    </button>
                  )}
                  {step === 2 && (
                    <button
                      onClick={() => setStep(3)}
                      className="w-full bg-black text-white py-2 rounded-xl hover:bg-gray-900 transition duration-300 font-medium text-base"
                    >
                      Continue to Payment
                    </button>
                  )}
                  {step === 3 && (
                    <button className="w-full bg-black text-white py-2 rounded-xl hover:bg-gray-900 transition duration-300 font-medium text-base">
                      Place Order
                    </button>
                  )}
                  <button
                    onClick={() => (step === 1 ? onClose() : setStep(step - 1))}
                    className="w-full text-center text-black hover:text-gray-600 hover:underline py-2 transition-colors"
                  >
                    {step === 1 ? "Continue Shopping" : "Back"} →
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
