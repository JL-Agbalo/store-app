import React from "react";
import { categories } from "../../data/products/categories";

function FilterProduct({ onFilterChange, selectedCategory }) {
  return (
    <div className="mb-6 flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onFilterChange(category.name)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                    ${
                      selectedCategory === category.name
                        ? "bg-black text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                    }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}

export default FilterProduct;
