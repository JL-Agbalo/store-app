import React, { useEffect, useState } from "react";
import { getProductList } from "../../services/productService";
import {
  HeroBanner,
  FeaturedProducts,
  NewArrivals,
  Promotions,
  Testimonials,
  CategoryList,
} from "../../components/home";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = getProductList();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <HeroBanner />
      <FeaturedProducts products={products?.slice(1, 5)} />
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <Promotions />
        <NewArrivals products={products.slice(10, 14)} />
        <CategoryList />
        <Testimonials />
      </div>
    </>
  );
}

export default Home;
