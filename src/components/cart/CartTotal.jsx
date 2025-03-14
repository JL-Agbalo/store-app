import React from "react";

function CartTotal() {
  return (
    <div className="rounded-xl bg-gray-100 p-6 space-y-7">
      <div className="space-y-4">
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

      {/* Promo Code Input */}
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Promo code"
          className="flex-1 min-w-0 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-black"
        />
        <button className="px-3 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-black transition-colors whitespace-nowrap">
          Apply
        </button>
      </div>

      <div className="pt-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-lg font-semibold text-gray-900">Total</p>
            <p className="text-xs text-gray-500 mt-1">Including VAT</p>
          </div>
          <div className="text-right">
            <p className="text-xl font-semibold text-gray-900">$98.97</p>
            <p className="text-xs text-green-600 mt-1">You save $6.99</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartTotal;
