import React from "react";
import { Cart as Icons } from "../icons/Icons";

const CartItem = ({ item }) => {
  return (
    <div className="flex items-center gap-4 py-2.5 group">
      {/* Product Image */}
      <img
        src={item.images[0]}
        alt={item.title}
        className="w-16 h-16 object-cover rounded-lg bg-gray-50"
      />

      {/* Product Details */}
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-gray-900 text-base truncate">
          {item.title}
        </h3>
        <p className="text-gray-500 text-sm mt-0.5">${item.price}</p>

        {/* Quantity Controls */}
        <div className="flex items-center mt-2">
          <button className="text-gray-400 hover:text-black transition-colors">
            <Icons.Minus className="w-3.5 h-3.5" />
          </button>
          <span className="mx-3 min-w-[1.5rem] text-center text-sm">
            {item.quantity}
          </span>
          <button className="text-gray-400 hover:text-black transition-colors">
            <Icons.Plus className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Remove Button */}
      <button className="text-gray-400 hover:text-black transition-colors opacity-0 group-hover:opacity-100">
        <Icons.Close className="w-4 h-4" />
      </button>
    </div>
  );
};

export default CartItem;
