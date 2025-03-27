import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./features/layout/components/Layout/MainLayout";
import AuthLayout from "./features/layout/components/Layout/AuthLayout";
import AdminLayout from "./features/layout/components/Layout/AdminLayout";

// Page imports
import Home from "./Npages/Home";
import Products from "./Npages/Products";
// import ProductDetail from "./Npages/Products/[id]";
import SignIn from "./Npages/Auth/SignIn";
import SignUp from "./Npages/Auth/SignUp";
import Cart from "./Npages/Cart";
import NotFound from "./Npages/NotFound";

import { PUBLIC_ROUTES, AUTH_ROUTES } from "./features/layout/constants/routes";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route element={<MainLayout isAuthenticated={isAuthenticated} />}>
          <Route path={PUBLIC_ROUTES.HOME} element={<Home />} />
          <Route path={PUBLIC_ROUTES.PRODUCTS} element={<Products />} />
          {/* <Route
            path={PUBLIC_ROUTES.PRODUCT_DETAIL}
            element={<ProductDetail />}
          /> */}
          <Route path={PUBLIC_ROUTES.CART} element={<Cart />} />
        </Route>

        {/* Only show auth routes if not authenticated */}
        {!isAuthenticated && (
          <Route element={<AuthLayout />}>
            <Route path={AUTH_ROUTES.SIGNIN} element={<SignIn />} />
            <Route path={AUTH_ROUTES.SIGNUP} element={<SignUp />} />
          </Route>
        )}

        {/* 404 route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
