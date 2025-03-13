import React from "react";
import { Home as Icons } from "../icons";
import { Link } from "react-router-dom";

function Promotions() {
  return (
    <div className="container mx-auto">
      <section className="py-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-11">
          <div className="col-span-1 lg:col-span-7 p-12 bg-gray-50 rounded-2xl lg:rounded-l-2xl lg:rounded-r-none flex flex-col justify-between relative overflow-hidden">
            {/* <div className="absolute -top-10 -right-10 w-32 h-32 bg-black opacity-5 rounded-full"></div> */}

            {/* Header with accent */}
            <div className="mb-8">
              <div className="w-16 h-1 bg-black mb-4"></div>
              <h2 className="font-manrope font-bold text-3xl sm:text-4xl leading-tight text-black">
                Exclusive Deals <span className="text-gray-600">&</span> Special
                Promotions
              </h2>
            </div>

            <p className="text-lg text-gray-700 mb-8">
              Unlock premium savings with our limited-time offers on bestselling
              products. Members get early access to flash sales and seasonal
              discounts.
            </p>

            {/* Promotions highlights in cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-full bg-black">
                    <Icons.Tag className="text-white" size={18} />
                  </div>
                  <h3 className="font-semibold text-black">50% Off</h3>
                </div>
                <p className="text-sm text-gray-600">
                  On selected premium items
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-full bg-black">
                    <Icons.Gift className="text-white" size={18} />
                  </div>
                  <h3 className="font-semibold text-black">Free Gift</h3>
                </div>
                <p className="text-sm text-gray-600">With purchases over $50</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-full bg-black">
                    <Icons.Clock className="text-white" size={18} />
                  </div>
                  <h3 className="font-semibold text-black">Flash Sale</h3>
                </div>
                <p className="text-sm text-gray-600">Ends in 48 hours</p>
              </div>
            </div>

            {/* CTA section */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Link
                to="/products"
                className="flex items-center rounded-full py-3 px-6 w-full sm:w-auto justify-center bg-black text-white font-semibold hover:bg-gray-800 transition-all duration-300"
              >
                Shop Now
              </Link>
              <Link
                to="/"
                className="text-black font-medium flex items-center gap-2 hover:underline"
              >
                See all promotions →
              </Link>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-5 hidden lg:block">
            <img
              src="https://placehold.co/600x400"
              alt="Promotions Banner"
              className="w-full h-full rounded-r-2xl object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Promotions;
