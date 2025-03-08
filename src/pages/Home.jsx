import React from "react";
import Navbar from "../components/navbar/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-black p-10">
        <h1 className="text-5xl font-bold mb-6">Welcome to Our Store</h1>
        <p className="text-lg mb-6 text-gray-700 text-center">
          Discover the best products and enjoy a seamless shopping experience.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition">
          Shop Now
        </button>
        <div className="mt-12 w-full max-w-4xl">
          <h2 className="text-3xl font-semibold mb-4">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Example product cards */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/150"
                alt="Product 1"
                className="w-full h-40 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold mb-2">Product 1</h3>
              <p className="text-gray-700 mb-4">Description of product 1.</p>
              <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition">
                Buy Now
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/150"
                alt="Product 2"
                className="w-full h-40 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold mb-2">Product 2</h3>
              <p className="text-gray-700 mb-4">Description of product 2.</p>
              <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition">
                Buy Now
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/150"
                alt="Product 3"
                className="w-full h-40 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold mb-2">Product 3</h3>
              <p className="text-gray-700 mb-4">Description of product 3.</p>
              <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
