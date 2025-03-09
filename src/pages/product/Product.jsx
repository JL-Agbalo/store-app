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
    <div>
      {product && <pre>{JSON.stringify(product, null, 2)}</pre>}
      <ProductItem product={product} />
      <RelatedProducts categoryId={product.category.id} />
    </div>
  );
}

export default Product;
