import React from "react";

function ProductCard({ product, onClick }) {
  return (
    <div
      className="bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105 cursor-pointer"
      onClick={onClick}
    >
      {/* Product Image (First Image) */}
      <img
        src={product.images[0]}
        alt={product.title}
        className="w-full h-48 object-cover rounded-md"
      />

      {/* Product Info */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold truncate" title={product.title}>
          {product.title}
        </h2>
        <p className="text-gray-500 text-sm">{product.category.name}</p>
        <p className="text-xl font-bold mt-2">${product.price}</p>

        {/* Image Thumbnails */}
        <div className="flex space-x-2 mt-2">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Product ${index}`}
              className="w-12 h-12 object-cover rounded-md border border-gray-200 hover:border-gray-400 transition"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
