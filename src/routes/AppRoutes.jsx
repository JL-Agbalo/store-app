import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import { Home } from "../pages/home";
import { Products, Product } from "../pages/product";
import { Login, Signup } from "../pages/auth";
import { UserProfile } from "../pages/user-profile";
import { Checkout } from "../pages/checkout";

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
        path="/product/:id"
        element={
          <MainLayout>
            <Product />
          </MainLayout>
        }
      />
      <Route
        path="/checkout"
        element={
          <MainLayout>
            <Checkout />
          </MainLayout>
        }
      />
      <Route
        path="/profile"
        element={
          <MainLayout>
            <UserProfile />
          </MainLayout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
