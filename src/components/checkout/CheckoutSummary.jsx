import React from "react";
import { Cart as Icons } from "../icons/Icons";

function CheckoutSummary({ cartItems }) {
  const subtotal = 199.99;
  const shipping = 0;
  const tax = 19.99;
  const discount = 10;
  const total = subtotal + shipping + tax - discount;

  return (
    <div className="rounded-xl bg-gray-100 p-6 space-y-7">
      {/* Order Items */}
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Order Summary</h3>
        <div className="space-y-4 max-h-[200px] overflow-y-auto pr-2">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-start gap-4 group">
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-gray-900 truncate">
                  {item.title}
                </h4>
                <div className="flex items-center gap-2 mt-1">
                  <button className="text-gray-500 hover:text-black disabled:opacity-50">
                    <Icons.Minus className="w-3 h-3" />
                  </button>
                  <span className="text-sm">{item.quantity}</span>
                  <button className="text-gray-500 hover:text-black">
                    <Icons.Plus className="w-3 h-3" />
                  </button>
                </div>
                <p className="text-sm font-medium mt-1">${item.price}</p>
              </div>
              <button className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                <Icons.Close className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Price Breakdown */}
      <div className="pt-4 border-t border-gray-200 space-y-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium text-gray-900">
            ${subtotal.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Shipping</span>
          <span className="text-green-600 font-medium">Free</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Tax</span>
          <span className="font-medium text-gray-900">${tax.toFixed(2)}</span>
        </div>
        {discount > 0 && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Discount</span>
            <span className="text-red-600 font-medium">
              -${discount.toFixed(2)}
            </span>
          </div>
        )}
      </div>

      {/* Total */}
      <div className="pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-lg font-semibold text-gray-900">Total</p>
            <p className="text-xs text-gray-500 mt-1">Including VAT</p>
          </div>
          <div className="text-right">
            <p className="text-xl font-semibold text-gray-900">
              ${total.toFixed(2)}
            </p>
            {discount > 0 && (
              <p className="text-xs text-green-600 mt-1">
                You save ${discount.toFixed(2)}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutSummary;
