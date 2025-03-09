import React from "react";
import { Home as Icons } from "../icons";

function Promotions() {
  return (
    <div className="my-12 px-4">
      {/* Header Section */}
      <h2 className="text-3xl font-semibold mb-4 text-center text-black">
        Special Promotions
      </h2>
      <p className="text-lg mb-4 text-center text-gray-700">
        Enjoy exclusive discounts and limited-time offers on a wide range of
        products. Don’t miss out on these incredible deals!
      </p>

      {/* Promotion Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        <div className="bg-white p-4 rounded-lg flex flex-col items-center">
          <Icons.Tag className="text-3xl text-black mb-2" />
          <h3 className="font-semibold text-lg">Up to 50% Off</h3>
          <p className="text-gray-600 text-sm">
            Save big on selected categories!
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg flex flex-col items-center">
          <Icons.Gift className="text-3xl text-black mb-2" />
          <h3 className="font-semibold text-lg">Exclusive Coupons</h3>
          <p className="text-gray-600 text-sm">
            Unlock special discounts with promo codes.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg flex flex-col items-center">
          <Icons.Clock className="text-3xl text-black mb-2" />
          <h3 className="font-semibold text-lg">Limited Time Only</h3>
          <p className="text-gray-600 text-sm">
            Hurry before these deals disappear!
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg flex flex-col items-center">
          <Icons.ShoppingCart className="text-3xl text-black mb-2" />
          <h3 className="font-semibold text-lg">Buy More, Save More</h3>
          <p className="text-gray-600 text-sm">
            Special bulk discounts available now!
          </p>
        </div>
      </div>

      {/* Call to Action Button */}
      <div className="flex justify-center mt-8">
        <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition cursor-pointer">
          View Promotions
        </button>
      </div>
    </div>
  );
}

export default Promotions;
