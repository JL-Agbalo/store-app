import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductItem, RelatedProducts } from "../../components/product";
import { getProductById } from "../../service/platziApi";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div className="max-w-6xl mx-auto p-6">
      {product ? <ProductItem product={product} /> : <p>Loading...</p>}
      <RelatedProducts categoryId={1} />
    </div>
  );
}

export default Product;
