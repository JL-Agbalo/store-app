import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./features/layout/components/Layout/MainLayout";
import AuthLayout from "./features/layout/components/Layout/AuthLayout";
import AdminLayout from "./features/layout/components/Layout/AdminLayout";

// Page imports
import Home from "./Npages/Home";
import Products from "./Npages/Products";
// import ProductDetail from "./Npages/Products/[id]";
import Login from "./Npages/Auth/Login";
import Register from "./Npages/Auth/Register";
import Cart from "./Npages/Cart";
import NotFound from "./Npages/NotFound";

import { PUBLIC_ROUTES, AUTH_ROUTES } from "./features/layout/constants/routes";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

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
            <Route path={AUTH_ROUTES.LOGIN} element={<Login />} />
            <Route path={AUTH_ROUTES.REGISTER} element={<Register />} />
          </Route>
        )}

        {/* 404 route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
