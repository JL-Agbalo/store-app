import React from "react";
import headerItemBanner from "../../assets/images/banners/headerItemBanner.png";

function HeroBanner() {
  return (
    <div className="bg-white text-black flex relative z-20 items-center overflow-hidden h-[80vh] ">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center py-16">
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left ">
          <span className="w-20 h-2 bg-black mb-6"></span>
          <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black leading-none text-black mb-4 lg:pt-0 pt-16">
            Experience
            <span className="block text-5xl sm:text-7xl">Sound</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-700 mb-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias in
            doloremque optio sunt minus modi quae possimus hic unde fugit
            quidem, aperiam repellendus inventore natus. Quis, dignissimos
            repellat. Quae, reprehenderit!. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Eius autem assumenda dolores! Repellat
            debitis quia id praesentium cumque neque harum sint molestiae,
            voluptate illo modi officiis numquam magni veniam voluptatem.
          </p>
          <div className="flex flex-col sm:flex-row">
            <a
              href="#"
              className="uppercase py-2 px-4 rounded-lg bg-black text-white border-2 border-transparent text-md mb-4 sm:mb-0 sm:mr-4 hover:bg-gray-800"
            >
              Shop Now
            </a>
            <a
              href="#"
              className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-black text-black hover:bg-black hover:text-white text-md"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-center mb-8 lg:mb-0">
          <img src={headerItemBanner} className="max-w-md" alt="Headphones" />
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
