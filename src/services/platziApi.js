import axios from "axios";

const API_URL = "https://api.escuelajs.co/api/v1";

// Product-related API calls
export const getProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  console.log("Successfully fetched products");
  return response.data;
};

export const getProductById = async (id) => {
  const response = await axios.get(`${API_URL}/products/${id}`);
  console.log(`Successfully fetched product with id: ${id}`);
  return response.data;
};

// User-related API calls
export const loginUser = async (email, password) => {
  const response = await axios.post(`${API_URL}/auth/login`, {
    email,
    password,
  });
  console.log("Successfully logged in user");
  return response.data;
};

export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/users/`, userData);
  console.log("Successfully registered user");
  return response.data;
};

// Category-related API calls
export const getCategories = async () => {
  const response = await axios.get(`${API_URL}/categories`);
  console.log("Successfully fetched categories");
  return response.data;
};

export const getProductsByCategory = async (categoryId) => {
  const response = await axios.get(
    `${API_URL}/categories/${categoryId}/products`
  );
  console.log(`Successfully fetched products for category id: ${categoryId}`);
  return response.data;
};
