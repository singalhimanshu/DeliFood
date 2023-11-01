import { Navigate, Outlet, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Menu from "../pages/Menu";
import Layout from "../components/Layout";
import PrivateRoute from "../components/PrivateRoute";

const routes = () => {
  return {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/menu", element: <Menu /> },
      { path: "/contact", element: <Contact /> },
      { path: "/signin", element: <Signin /> },
      { path: "/signup", element: <Signup /> },
      { path: "/*", element: <PrivateRoute /> },
    ],
  };
};

export default routes;
