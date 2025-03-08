import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { getProducts } from "../../service/platziApi";
function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Our Products</h1>
        <ProductList products={products} />
      </div>
    </>
  );
}

export default Products;
