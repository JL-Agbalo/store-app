import React, { useState, useEffect } from "react";
import { ProductCard } from "./index";
import { getProductsByCategory } from "../../data/appStoreData";

function RelatedProduct({ categoryId }) {
  const [relatedProducts, setrelatedProducts] = useState([]);

  useEffect(() => {
    async function fetchRelatedProducts() {
      try {
        const products = getProductsByCategory(categoryId);
        setrelatedProducts(products);
      } catch (error) {
        console.error("Error fetching related products:", error);
      }
    }
    fetchRelatedProducts();
  }, [categoryId]);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Related Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {relatedProducts.slice(0, 8).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default RelatedProduct;
