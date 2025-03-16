import React, { useState } from "react";
import { Cart as Icons } from "../icons/Icons";
import { CheckoutForm, CheckoutSummary } from "../checkout";

function CheckoutModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  console.log("Test Log From Modal");
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
          <div className="flex items-center justify-between p-5">
            <div className="flex items-center space-x-2">
              <Icons.Bag className="w-5 h-5" />
              <h2 className="text-lg font-semibold">Checkout</h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 hover:opacity-70 transition-opacity"
            >
              <Icons.Close className="w-5 h-5" />
            </button>
          </div>

          {/* Content - Split into two columns */}
          <div className="flex flex-col md:flex-row flex-1">
            {/* Left Column - Checkout Form */}
            <div className="md:w-2/3">
              <div className="px-6 pb-6 overflow-y-auto max-h-[60vh] md:max-h-[55vh]">
                <CheckoutForm step={step} setStep={setStep} />
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="md:w-1/2 md:rounded-r-2xl">
              <div className="p-6 pt-3 sticky top-0">
                <CheckoutSummary />
                <div className="mt-6 space-y-3">
                  {step === 1 && (
                    <button
                      onClick={() => setStep(2)}
                      className="w-full bg-black text-white py-2 rounded-xl hover:bg-gray-900 transition duration-300 font-medium text-base"
                    >
                      Continue to Payment
                    </button>
                  )}
                  {step === 2 && (
                    <button className="w-full bg-black text-white py-2 rounded-xl hover:bg-gray-900 transition duration-300 font-medium text-base">
                      Place Order
                    </button>
                  )}
                  <button
                    onClick={onClose}
                    className="w-full text-center text-black hover:text-gray-600 hover:underline py-2 transition-colors"
                  >
                    Back to Cart →
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

export default CheckoutModal;
