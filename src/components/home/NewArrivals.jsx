import React from "react";
import ProductList from "../../pages/product/ProductList";

function NewArrivals({ products }) {
  return (
    <div className="my-12">
      <h2 className="text-3xl font-semibold mb-4">New Arrivals</h2>
      <ProductList products={products} />
    </div>
  );
}

export default NewArrivals;
