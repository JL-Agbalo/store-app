import React, { useState } from "react";
import { users } from "../../data/appStoreData";
import ShippingInformation from "./ShippingInformation";
import PaymentInformation from "./PaymentInformation";
import PaymentProcessing from "./PaymentProcessing";

function CheckoutForm({ step }) {
  const user = users[0];
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
    }, 2000);
  };

  if (isProcessing) {
    return <PaymentProcessing paymentMethod={paymentMethod} />;
  }

  return (
    <div>
      {step === 1 && <ShippingInformation user={user} />}
      {step === 2 && (
        <>
          <PaymentInformation
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
          />
          <button
            onClick={handlePayment}
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition duration-300 mt-6"
          >
            {paymentMethod === "card" ? "Pay $199.99" : "Confirm Order"}
          </button>
        </>
      )}
    </div>
  );
}

export default CheckoutForm;
