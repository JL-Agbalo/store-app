import React from "react";
import { ProductCard } from "../../components/product";

function NewArrivals({ products }) {
  return (
    <div className="mx-auto px-6 py-10 max-w-7xl">
      <h2 className="text-4xl font-semibold mb-6">New Arrivals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default NewArrivals;
