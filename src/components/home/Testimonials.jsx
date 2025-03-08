import React from "react";

function Testimonials() {
  return (
    <div className="my-12 px-4">
      <h2 className="text-3xl font-semibold mb-4 text-center">
        What Our Customers Say
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg text-center flex flex-col justify-between">
          <p className="text-lg mb-4 italic">
            "Great products and amazing customer service!"
          </p>
          <div>
            <p className="font-semibold">- John Doe</p>
            <p className="text-sm mt-2">⭐⭐⭐⭐⭐</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg text-center flex flex-col justify-between">
          <p className="text-lg mb-4 italic">
            "I love shopping here. The quality is top-notch."
          </p>
          <div>
            <p className="font-semibold">- Jane Smith</p>
            <p className="text-sm mt-2">⭐⭐⭐⭐⭐</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg text-center flex flex-col justify-between">
          <p className="text-lg mb-4 italic">
            "Fast shipping and great prices. Highly recommend!"
          </p>
          <div>
            <p className="font-semibold">- Michael Johnson</p>
            <p className="text-sm mt-2">⭐⭐⭐⭐⭐</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg text-center flex flex-col justify-between">
          <p className="text-lg mb-4 italic">
            "Excellent customer support and fast delivery."
          </p>
          <div>
            <p className="font-semibold">- Sarah Williams</p>
            <p className="text-sm mt-2">⭐⭐⭐⭐⭐</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg text-center flex flex-col justify-between">
          <p className="text-lg mb-4 italic">
            "The products are of great quality and affordable."
          </p>
          <div>
            <p className="font-semibold">- David Brown</p>
            <p className="text-sm mt-2">⭐⭐⭐⭐⭐</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg text-center flex flex-col justify-between">
          <p className="text-lg mb-4 italic">
            "I am very satisfied with my purchase. Will shop again!"
          </p>
          <div>
            <p className="font-semibold">- Emily Clark</p>
            <p className="text-sm mt-2">⭐⭐⭐⭐⭐</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
