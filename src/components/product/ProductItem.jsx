import React, { useState } from "react";
import { Product as Icons } from "../../components/icons/Icons";
function ProductItem({ product }) {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="product-container max-w-4xl mx-auto overflow-hidden p-6 my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left - Product Images */}
        <div>
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <img
              src={selectedImage}
              alt={product.title}
              className="w-full object-cover h-80 transition-opacity duration-500 ease-in-out"
            />
          </div>
          <div className="flex justify-center gap-4 mt-4">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.title} ${index + 1}`}
                className={`w-16 h-16 object-cover border-2 cursor-pointer transition rounded-lg ${
                  selectedImage === image
                    ? "border-black shadow-lg"
                    : "border-gray-300 hover:border-gray-500"
                }`}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>

        {/* Right - Product Details */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              {product.title}
            </h2>
            <p className="text-gray-700 text-md mt-4 leading-relaxed">
              {product.description}
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <h3 className="text-md font-medium text-gray-800">Category:</h3>
              <div className="flex items-center gap-2">
                <img
                  src={product.category.image}
                  alt={product.category.name}
                  className="w-8 h-8 rounded-full border border-gray-300 shadow-sm"
                />
                <span className="text-sm text-gray-700">
                  {product.category.name}
                </span>
              </div>
            </div>
          </div>

          {/* Quantity and Wishlist */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center px-4 py-1">
              <button
                className="p-2 text-gray-700 hover:text-black"
                onClick={decreaseQuantity}
              >
                <Icons.Minus />
              </button>
              <span className="px-4 text-lg font-semibold">{quantity}</span>
              <button
                className="p-2 text-gray-700 hover:text-black"
                onClick={increaseQuantity}
              >
                <Icons.Plus />
              </button>
            </div>
            <button className="text-black-500 text-2xl hover:text-white-700">
              <Icons.Heart />
            </button>
          </div>

          {/* Pricing & CTA */}
          <div className="mt-6">
            <div className="flex items-center justify-between p-3">
              <span className="text-2xl font-bold text-gray-900">
                ${product.price}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <button className="bg-black text-white px-4 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
                <Icons.Bag className="mr-2 inline" /> Add to Cart
              </button>
              <button className="py-2 px-4 rounded-lg bg-transparent border-2 border-black text-black hover:bg-black hover:text-white text-md">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
