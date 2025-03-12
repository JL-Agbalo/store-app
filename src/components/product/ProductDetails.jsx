import React from "react";

function ProductDetails({ product }) {
  return (
    <>
      <img
        src={product.images[0]}
        alt={product.title}
        className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-80 transition-opacity duration-300"
      />
      <h3 className="mt-4 text-base text-gray-800 truncate max-w-full">
        {product.title}
      </h3>
      <p className="text-sm text-gray-600">{product.category.name}</p>
      <p className="mt-1 text-lg font-semibold text-gray-900">
        ${product.price}
      </p>
    </>
  );
}

export default ProductDetails;
