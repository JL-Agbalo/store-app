import React from "react";
import { Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";

function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group transform hover:scale-105 transition-transform duration-300 cursor-pointer"
    >
      <ProductDetails product={product} />
    </Link>
  );
}

export default ProductCard;
