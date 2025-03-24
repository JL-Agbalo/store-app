import React, { useState } from "react";
import { user } from "../../data/users/users";
import ShippingInformation from "./ShippingInformation";
import PaymentInformation from "./PaymentInformation";
import PaymentProcessing from "./PaymentProcessing";

function CheckoutForm({ step, cartTotal }) {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isProcessing, setIsProcessing] = useState(false);

  // Group payment-related props
  const paymentProps = {
    paymentMethod,
    setPaymentMethod,
  };

  if (isProcessing) {
    return (
      <PaymentProcessing
        paymentMethod={paymentMethod}
        onSuccess={() => setIsProcessing(false)}
      />
    );
  }

  return (
    <div>
      {step === 1 && <ShippingInformation user={user} />}
      {step === 2 && (
        <>
          <PaymentInformation {...paymentProps} />
          <button
            onClick={() => setIsProcessing(true)}
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-900 transition duration-300 mt-6"
          >
            {paymentMethod === "card" ? `Pay $${cartTotal}` : "Confirm Order"}
          </button>
        </>
      )}
    </div>
  );
}

export default CheckoutForm;
