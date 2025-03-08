import React from "react";
import ProductList from "../../pages/product/ProductList";

function FeaturedProducts({ products }) {
  return (
    <div className="my-12">
      <h2 className="text-3xl font-semibold mb-4">Featured Products</h2>
      <ProductList products={products} />
    </div>
  );
}

export default FeaturedProducts;
