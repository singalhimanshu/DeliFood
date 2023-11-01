import { Navigate, Outlet } from "react-router-dom";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Layout from "../components/Layout";

const privateRoutes = () => {
  return {
    element: <Layout />,
    children: [
      { path: "/cart", element: <Cart /> },
      { path: "/cart/checkout", element: <Checkout /> },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  };
};

export default privateRoutes;
