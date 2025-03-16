import React from "react";
import { CartItem } from "./index";
import { products } from "../../data/appStoreData";

function CartList() {
  const cartItems = products.slice(0, 10).map((product) => ({
    ...product,
    quantity: 1,
  }));

  return (
    <div className="divide-y divide-gray-100">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default CartList;
