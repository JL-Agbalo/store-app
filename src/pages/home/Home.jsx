import React, { useEffect, useState } from "react";
import ProductList from "../product/ProductList";
import { getProducts } from "../../service/platziApi";
function Home() {
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
      <div className="flex flex-col items-center justify-center flex-grow bg-gray-100 text-black p-10">
        <h1 className="text-5xl font-bold mb-6">Welcome to Our Store</h1>
        <p className="text-lg mb-6 text-gray-700 text-center">
          Discover the best products and enjoy a seamless shopping experience.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition">
          Shop Now
        </button>
        <div className="mt-12 w-full max-w-4xl">
          <h2 className="text-3xl font-semibold mb-4">Featured Products</h2>
          <ProductList products={products.slice(0, 6)} />
          {/* ADDJUST BASED ON TOP ON PRODUCT RATINGS */}
        </div>
      </div>
    </>
  );
}

export default Home;
