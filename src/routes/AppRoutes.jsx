import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/home/Home";
import Products from "../pages/product/Products";
import ProductDetail from "../pages/product/ProductDetail";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Routes Without Navbar/Footer */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Routes With Navbar/Footer using MainLayout */}
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />
      <Route
        path="/products"
        element={
          <MainLayout>
            <Products />
          </MainLayout>
        }
      />
      <Route
        path="/productDetail"
        // path="/product/:id"
        element={
          <MainLayout>
            <ProductDetail />
          </MainLayout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
