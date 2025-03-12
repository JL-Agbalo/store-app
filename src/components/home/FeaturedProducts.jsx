import React from "react";
import { ProductCard } from "../../components/product";
function FeaturedProducts({ products }) {
  return (
    <div className="mx-auto px-6 py-10">
      <h2 className="text-4xl font-semibold mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
