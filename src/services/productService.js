// Remove
import { products } from "../data/products/products";
import { productImages } from "../data/products/productImages";
import { categories } from "../data/products/categories";

export const validateProductImages = (productId) => {
  const productImageCount = productImages.filter(
    (img) => img.product_id === productId
  ).length;
  return productImageCount <= 3;
};

export const getProductList = () => {
  return products.map((product) => {
    const images = productImages
      .filter((image) => image.product_id === product.id)
      .sort((a, b) => a.order - b.order);
    const category = categories.find((cat) => cat.id === product.category_id);
    return {
      ...product,
      images,
      primaryImage: images.find((img) => img.is_primary)?.image_url,
      category_name: category?.name || "Uncategorized",
    };
  });
};

export const getProductsByCategory = (categoryId) => {
  if (categoryId === 0) {
    return products;
  }

  return products.filter((product) => product.category_id === categoryId);
};
