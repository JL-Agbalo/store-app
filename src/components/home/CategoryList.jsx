import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { categories as getCategories } from "../../data/products/categories";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = getCategories;
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Our Collection
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked categories designed for your lifestyle
          </p>
        </div>

        {/* Featured Category Row */}
        {categories.length > 0 && (
          <div className="mb-8">
            <Link to="/">
              {/* <Link to={`/category/${categories[0].id}`}> */}
              <div className="relative h-96 rounded-xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent z-10"></div>
                <img
                  src={categories[0].image}
                  alt={categories[0].name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                />
                <div className="absolute bottom-0 left-0 p-8 z-20">
                  <span className="inline-block px-4 py-1 bg-white text-gray-900 text-sm font-medium rounded-full mb-3">
                    Featured
                  </span>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {categories[0].name}
                  </h3>
                  <p className="text-white/80 mb-4 max-w-md">
                    Explore our most popular category with the latest trending
                    products
                  </p>
                  <div className="inline-flex items-center text-white text-sm font-medium group-hover:underline">
                    Shop the collection →
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Category Grid with Mixed Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.slice(1, 4).map((category, index) => (
            <Link to="/" key={category.id}>
              {/* <Link to={`/category/${category.id}`}> */}
              <div
                className={`relative ${
                  index === 0 ? "md:col-span-2" : ""
                } h-64 md:h-72 rounded-xl overflow-hidden group`}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors z-10"></div>
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                  <h3 className="text-xl font-bold text-white">
                    {category.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-end">
          <Link
            to="/categories"
            className="text-black font-medium flex items-center gap-2 hover:underline"
          >
            Browse all categories →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoryList;
