import React from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "../../components/product";

function FeaturedProducts({ products }) {
  return (
    <section className="w-full bg-gray-100 py-15">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-16 space-y-4">
          <div className="w-12 h-[1px] bg-black"></div>
          <p className="text-sm uppercase tracking-wider text-gray-500">
            Curated Selection
          </p>
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-light">Featured Products</h2>
            <Link
              to="/products"
              className="text-sm hover:underline underline-offset-4"
            >
              View All Products →
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
