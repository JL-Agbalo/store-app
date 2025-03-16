import React, { useState } from "react";
import { CheckoutForm, CheckoutSummary } from "../../components/checkout";
import { products } from "../../data/appStoreData";

function Checkout() {
  const [step, setStep] = useState(1);

  // Static cart data
  const cartItems = products.slice(0, 3).map((product) => ({
    ...product,
    quantity: 1,
  }));

  const cartTotal = 199.99; // Static total for demo

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Steps Indicator */}
      <div className="flex items-center justify-center mb-8">
        {["Shipping", "Payment"].map((label, i) => (
          <React.Fragment key={label}>
            <div
              className={`flex items-center ${
                i + 1 === step ? "text-black" : "text-gray-400"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-medium ${
                  i + 1 === step ? "border-black text-black" : "border-gray-300"
                }`}
              >
                {i + 1}
              </div>
              <span className="ml-2 text-sm font-medium">{label}</span>
            </div>
            {i < 1 && <div className="w-24 h-px bg-gray-200 mx-2" />}
          </React.Fragment>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <CheckoutForm
            step={step}
            cartItems={cartItems}
            cartTotal={cartTotal}
          />
        </div>
        <div className="lg:w-1/3">
          <div className="sticky top-24">
            <CheckoutSummary cartItems={cartItems} />
            <div className="mt-6 space-y-3">
              {step === 1 ? (
                <button
                  onClick={() => setStep(2)}
                  className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition duration-300 font-medium"
                  disabled={cartItems.length === 0}
                >
                  Continue to Payment
                </button>
              ) : (
                <button
                  onClick={() => setStep(1)}
                  className="w-full text-center text-black hover:text-gray-600 hover:underline py-2 transition-colors"
                >
                  Back to Shipping
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
