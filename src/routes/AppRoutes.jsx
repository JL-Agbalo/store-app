import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import { Home } from "../pages/home";
import { Products, ProductDetail } from "../pages/product";
import { Login, Signup } from "../pages/auth";
import { Profile } from "../pages/profile";

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
      {/* <Route
        path="/profile"
        element={
          <MainLayout>
            <Profile />
          </MainLayout>
        }
      /> */}
    </Routes>
  );
};

export default AppRoutes;
