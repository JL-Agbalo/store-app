import React, { useEffect, useState } from "react";
import { ProductList } from "../../components/product";
// import { getProducts } from "../../service/platziApi";
import { products as getProductsData } from "../../data/ProductData";

function Products() {
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
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Our Products</h1>
      <ProductList products={products.slice(1)} />
    </div>
  );
}

export default Products;
