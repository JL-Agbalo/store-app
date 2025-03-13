import React from "react";
import { CartIcons as Icons } from "../icons";
const CartItem = ({ item }) => {
  return (
    <div className="grid grid-cols-5 gap-4 border-b py-4 items-center">
      <div className="flex items-center space-x-4 col-span-2">
        <img
          src={item.images[0]}
          alt={item.title}
          className="w-16 h-16 rounded-lg object-cover"
        />
        <p className="text-gray-800 text-sm">{item.title}</p>
      </div>
      <p className="text-gray-600 text-sm">${item.price.toFixed(2)}</p>
      <div className="flex items-center space-x-2 ">
        <button className="p-2 text-gray-700 hover:text-black">
          <Icons.Minus />
        </button>
        <span className="px-4 text-lg font-semibold">{1}</span>

        <button className="p-2 text-gray-700 hover:text-black">
          <Icons.Plus />
        </button>
      </div>
      <p className="text-gray-800 font-medium">
        ${(item.price * 1).toFixed(2)}
      </p>
    </div>
  );
};

export default CartItem;
