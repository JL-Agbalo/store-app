import React, { useState, useEffect } from "react";
import { ProductCard } from "../../components/product";
// import { getProducts } from "../service/platziApi";
import { products as getProductsData } from "../../data/products/products";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = getProductsData;
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6 pb-15">
      <h2 className="text-3xl font-semibold mb-4">Product List</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
