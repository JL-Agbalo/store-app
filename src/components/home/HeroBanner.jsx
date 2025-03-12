import React from "react";
import { Link } from "react-router-dom";
import headerItemBanner from "../../assets/images/banners/headerItemBanner.png";

function HeroBanner() {
  return (
    <div className="bg-white text-black flex relative z-20 items-center overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center py-16 max-w-7xl">
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <span className="w-20 h-2 bg-black mb-6"></span>
          <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black leading-none text-black mb-4">
            Discover
            <span className="block text-5xl sm:text-7xl">Headsets</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-700 mb-6">
            Explore our wide range of headsets designed for ultimate comfort and
            superior sound quality. Whether you're gaming, working, or just
            listening to music, our headsets provide an immersive audio
            experience. Enjoy crystal clear sound, noise-canceling features, and
            a sleek design that fits perfectly.
          </p>
          <div className="flex flex-col sm:flex-row">
            <Link
              to="/products"
              className="uppercase py-2 px-4 rounded-lg bg-black text-white border-2 border-transparent text-md mb-4 sm:mb-0 sm:mr-4 hover:bg-gray-800"
            >
              Shop Now
            </Link>
            <Link
              to="/"
              className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-black text-black hover:bg-black hover:text-white text-md"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-center mb-8 lg:mb-0">
          <img src={headerItemBanner} className="max-w-md" alt="Headsets" />
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
