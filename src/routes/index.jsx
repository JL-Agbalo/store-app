import { lazy } from "react";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

// Lazy load pages
const Home = lazy(() => import("../pages/Home"));
// const Products = lazy(() => import("../pages/Products"));
// const Cart = lazy(() => import("../pages/Cart"));
const SignIn = lazy(() => import("../pages/Auth/SignIn"));
const SignUp = lazy(() => import("../pages/Auth/SignUp"));
// const ForgotPassword = lazy(() => import("../pages/Auth/ForgotPassword"));
// const ResetPassword = lazy(() => import("../pages/Auth/ResetPassword"));
// const Profile = lazy(() => import("../pages/Profile"));
// const Orders = lazy(() => import("../pages/Orders"));
// const Checkout = lazy(() => import("../pages/Checkout"));

// Public routes (no auth required)
export const publicRoutes = [
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  //   {
  //     path: "/forgot-password",
  //     element: <ForgotPassword />,
  //   },
  //   {
  //     path: "/reset-password",
  //     element: <ResetPassword />,
  //   },
];

// Private routes (auth required)
export const privateRoutes = [
  //   {
  //     path: "/cart",
  //     element: <Cart />,
  //   },
  //   {
  //     path: "/checkout",
  //     element: <Checkout />,
  //   },
  //   {
  //     path: "/profile",
  //     element: <Profile />,
  //   },
  //   {
  //     path: "/orders",
  //     element: <Orders />,
  //   },
];

// Common routes (accessible to all)
export const commonRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  //   {
  //     path: "/products",
  //     element: <Products />,
  //   },
];

export { PrivateRoutes, PublicRoutes };
