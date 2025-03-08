import React from "react";

function Testimonials() {
  return (
    <div className="my-12">
      <h2 className="text-3xl font-semibold mb-4 text-center">
        What Our Customers Say
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <p className="text-lg mb-4">
            "Great products and amazing customer service!"
          </p>
          <p className="font-semibold">- John Doe</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <p className="text-lg mb-4">
            "I love shopping here. The quality is top-notch."
          </p>
          <p className="font-semibold">- Jane Smith</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <p className="text-lg mb-4">
            "Fast shipping and great prices. Highly recommend!"
          </p>
          <p className="font-semibold">- Mike Johnson</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
