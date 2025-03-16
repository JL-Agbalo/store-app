import React from "react";

function CheckoutSummary() {
  console.log("Test Log From Summary");

  return (
    <div className="rounded-xl bg-gray-100 p-6 space-y-7">
      <div className="space-y-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium text-gray-900">$89.98</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Shipping</span>
          <span className="text-green-600 font-medium">Free</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Tax</span>
          <span className="font-medium text-gray-900">$8.99</span>
        </div>
      </div>

      <div className="pt-4 border-t">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-lg font-semibold text-gray-900">Total</p>
            <p className="text-xs text-gray-500 mt-1">Including VAT</p>
          </div>
          <div className="text-right">
            <p className="text-xl font-semibold text-gray-900">$98.97</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutSummary;
