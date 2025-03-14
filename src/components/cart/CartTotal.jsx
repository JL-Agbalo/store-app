import React from "react";

function CartTotal() {
  return (
    <div className="rounded-lg border border-gray-100 bg-gray-100 divide-y divide-dashed">
      <div className="p-4 space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Subtotal (3 items)</span>
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

      <div className="p-4 rounded-b-lg">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-base font-semibold text-gray-900">Total</p>
            <p className="text-xs text-gray-500 mt-0.5">Including VAT</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold text-gray-900">$98.97</p>
            <p className="text-xs text-green-600 mt-0.5">You save $6.99</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartTotal;
