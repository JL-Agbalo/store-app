import React, { useEffect } from "react";

function PaymentProcessing({ paymentMethod, onSuccess }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Order Confirmed!");
      onSuccess?.();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onSuccess]);

  return (
    <div className="text-center py-8">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
      <h3 className="text-xl font-semibold mb-2">
        {paymentMethod === "card" ? "Processing Payment" : "Confirming Order"}
      </h3>
      <p className="text-gray-600">
        {paymentMethod === "card"
          ? "Please wait while we process your payment..."
          : "Please wait while we confirm your order..."}
      </p>
    </div>
  );
}

export default PaymentProcessing;
