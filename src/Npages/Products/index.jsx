/**
 * @fileoverview Product catalog page component
 * Displays product catalog with filtering and sorting
 * Handles product browsing and search functionality
 */
import React, { useState, useEffect } from "react";
import ProductCard from "../../features/products/components/ProductCard";
import ProductFilter from "../../features/products/components/ProductFilter";
import { getProducts } from "../../features/products/services/products";
function ProductCatalog() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = getProducts;
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category_id === parseInt(category)
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Products</h2>
        <ProductFilter
          onFilterChange={handleFilterChange}
          selectedCategory={selectedCategory}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found in this category.
          </p>
        )}
      </div>
    </div>
  );
}

export default ProductCatalog;
