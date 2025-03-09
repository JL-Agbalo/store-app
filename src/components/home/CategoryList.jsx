import React, { useState, useEffect } from "react";
import { getCategories } from "../../service/platziApi";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8">Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden group transform hover:scale-102"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-64 object-cover brightness-75 group-hover:opacity-75"
            />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-medium">{category.name}</h3>
              {/* <p className="text-sm">Category: {category.slug}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
