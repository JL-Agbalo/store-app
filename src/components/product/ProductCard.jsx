import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <button
      className="group transform hover:scale-102 transition-transform duration-300 cursor-pointer"
      onClick={handleClick}
    >
      <img
        src={product.images[0]}
        alt={product.title}
        className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8 group-hover:scale-105 transition-transform duration-300"
      />
      <h3 className="mt-4 text-sm text-gray-700 truncate max-w-full">
        {product.title}
      </h3>
      <p className="text-sm text-gray-500">{product.category.name}</p>
      <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
    </button>
  );
}

export default ProductCard;
