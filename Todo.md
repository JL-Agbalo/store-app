# 🛒 Store App To-Do List

## 1️⃣ Project Setup

- [x] Set up React project (`Vite` or `Create React App`)
- [x] Install dependencies (React Router, Axios, Tailwind, etc.)
- [x] Set up project folder structure (components, pages, services, etc.)
- [x] Configure routing with React Router

## 2️⃣ Pages

- [x] Create `Home` page
- [x] Create `Products` page (displays all products)
- [x] Create `Product Details` page
- [x] Create `Cart` modal
- [x] Create `Checkout` page
- [x] Create `User Profile` page
- [ ] Create `Admin Dashboard`
- [x] Create `Signup` page
- [x] Create `Login` page
- [ ] Create `404 - Not Found` page

## 3️⃣ API Integration

- [x] Fetch product categories from FakeStore API
- [x] Fetch product list and display them
- [x] Fetch single product details
- [x] Fetch related products based on category

## 4️⃣ UI Components

- [x] Create `Navbar` with links (Home, Products, Categories, Cart, etc.)
- [x] Create `HeroBanner` for promotions
- [x] Create `FeaturedProducts` section
- [ ] Create `NewArrivals` section
- [x] Create `CategoryList` component
- [x] Create `ProductItem` component
- [x] Create `RelatedProducts` section
- [x] Create `Testimonials` section
- [x] Create `Footer` with links
- [ ] Create `Notification` component for displaying alerts/messages
- [ ] Add success notifications (e.g., "Added to cart", "Order placed")
- [ ] Add error notifications (e.g., "Failed to add item", "Network error")
- [ ] Add info notifications (e.g., "Item out of stock", "Loading...")

## 4️⃣.1️⃣ Notification Settings

- [ ] Create notification preferences in user settings
- [ ] Add notification sound toggle
- [ ] Add notification duration settings (short/medium/long)
- [ ] Add notification position settings (top-right, bottom-right, etc.)
- [ ] Allow users to disable specific notification types
- [ ] Add notification history page
- [ ] Implement "Do Not Disturb" mode
- [ ] Add email notification preferences

## 5️⃣ React Hooks Usage

- [x] Use `useState` for managing state (cart, user, products)
- [x] Use `useEffect` for fetching API data
- [ ] Use `useContext` for global state management (cart, auth)
- [ ] Use `useReducer` for handling complex state logic (cart, user session)
- [ ] Use `useMemo` for performance optimization (memoized product lists)
- [ ] Use `useCallback` to optimize expensive functions
- [ ] Use `useRef` for referencing DOM elements (e.g., search input)

## 6️⃣ Product Features

- [ ] Implement `Add to Cart` functionality
- [ ] Implement `Remove from Cart` functionality
- [ ] Show cart total and number of items
- [ ] Show product reviews and ratings

## 7️⃣ User Authentication

- [ ] Add `Login` and `Signup` functionality (using Platzi Fake API)
- [ ] Store user session (localStorage or context)
- [ ] Add logout functionality
- [ ] Protect routes based on authentication

## 8️⃣ User Profile

- [ ] Fetch user details from API
- [ ] Allow users to update their profile (name, email, password)
- [ ] Show user order history
- [ ] Add address management for users

## 9️⃣ Checkout & Orders

- [x] Implement `Checkout` page
- [ ] Create `Order Summary` component
- [ ] Implement `Order Confirmation` page

## 🔟 Admin Panel

- [ ] Create `Admin Dashboard`
- [ ] Implement `Add/Edit/Delete` products
- [ ] Implement `View Orders` page
- [ ] Implement `Manage Users` (list, edit, delete)
- [ ] Implement `Manage Categories`
- [ ] Implement `Admin Authentication`

## 🔟 Handling No Data & Dummy Data

- [ ] Display **loading state** when fetching data
- [ ] Show a **"No Products Available"** message if API returns no data
- [ ] Show a **"No Categories Found"** message if category data is empty
- [ ] Use **dummy data** if API fails (e.g., local JSON file or static array)
- [ ] Handle API errors gracefully with a **friendly UI message**
- [ ] Add a **"Try Again"** button when API call fails

## 🔟 Optimization & Final Touches

- [ ] Improve UI/UX with better styling
- [ ] Optimize API calls (caching, pagination)
- [ ] Make the website responsive
- [ ] Deploy the store app (Netlify, Vercel, etc.)
- [ ] Test all features before launch
