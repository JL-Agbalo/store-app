import React from "react";

function Promotions() {
  return (
    <div className="my-12 bg-gray-200 p-6 rounded-lg text-center">
      <h2 className="text-3xl font-semibold mb-4">Special Promotions</h2>
      <p className="text-lg mb-6">
        Check out our special promotions and save big on your favorite products.
      </p>
      <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition">
        View Promotions
      </button>
    </div>
  );
}

export default Promotions;
