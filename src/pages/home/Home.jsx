import React, { useEffect, useState } from "react";
import { getProducts } from "../../service/platziApi";
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
      <HeroBanner />
      <div className="container mx-auto p-6">
        <FeaturedProducts products={products.slice(1, 5)} />
        <NewArrivals products={products.slice(10, 14)} />
        <Promotions />
        <CategoryList />
        <Testimonials />
      </div>
    </>
  );
}

export default Home;
