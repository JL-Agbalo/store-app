import React from "react";
import { CartItem } from "./index";
import { products } from "../../data/appStoreData";

function CartList() {
  const cartItems = products.slice(0, 10).map((product) => ({
    ...product,
    quantity: 1,
  }));

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <div className="w-16 h-16 mb-4 text-gray-300">
          <Icons.Bag className="w-full h-full" />
        </div>
        <h3 className="text-lg font-medium text-gray-900">
          Your cart is empty
        </h3>
        <p className="text-gray-500 text-sm mt-1">
          Start shopping to add items to your cart
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-1 px-2">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default CartList;
