import { products } from "../../../data/products/products";
import { productImages } from "../../../data/products/productImages";

/**
 * Product Service
 *
 * This file should contain functions for:
 * - getProducts(filters) - Get filtered products
 * - getProductById(id) - Get single product
 * - searchProducts(query) - Search products
 * - getCategories() - Get product categories
 * - getFeaturedProducts() - Get featured products
 * - createProduct(data) - Admin: Create product
 * - updateProduct(id, data) - Admin: Update product
 * - deleteProduct(id) - Admin: Delete product
 */

/**
 * Get product by ID with its images
 * @param {number} id - Product ID
 * @returns {Object|null} Product with images or null if not found
 */
export const getProductById = (id) => {
  const product = products.find((p) => p.id === id);

  if (!product) {
    return null;
  }

  const images = productImages.filter((img) => img.product_id === id);

  return {
    ...product,
    images: images,
    primaryImage: images.find((img) => img.is_primary)?.image_url,
  };
};

/**
 * Get all products with their images
 * @returns {Array} Array of products with images
 */
export const getProducts = () => {
  return products.map((product) => {
    const images = productImages.filter((img) => img.product_id === product.id);
    return {
      ...product,
      images: images,
      primaryImage: images.find((img) => img.is_primary)?.image_url,
    };
  });
};
