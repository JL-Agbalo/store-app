import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductItem, RelatedProducts } from "../../components/product";
// import { getProductById } from "../../data/products/products";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     try {
  //       const data = getProductById(id);
  //       setProduct(data);
  //     } catch (error) {
  //       console.error("Error fetching product:", error);
  //     }
  //   };

  //   fetchProduct();
  // }, [id]);
  return (
    <div className="max-w-6xl mx-auto p-6 pb-15">
      {product ? (
        <>
          <ProductItem product={product} />
          {/* <RelatedProducts categoryId={product.category.id} /> */}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Product;
