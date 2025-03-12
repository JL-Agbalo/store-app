import React, { useEffect, useState } from "react";
// import { getProducts } from "../../service/platziApi";
import { products as getProductsData } from "../../data/ProductData";

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
        const data = getProductsData;
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
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <FeaturedProducts products={products.slice(1, 5)} />
        <Promotions />
        <NewArrivals products={products.slice(10, 14)} />
        <CategoryList />
        <Testimonials />
      </div>
    </>
  );
}

export default Home;
