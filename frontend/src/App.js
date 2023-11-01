import React, { useState } from "react";
import "./App.css";
import "./Util.css";
import Navbar from "./components/shared/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import checkAuth from "./utils/checkAuth";
import routes from "./routes/routes";
import privateRoutes from "./routes/privateRoutes";

function App() {
  const router = createBrowserRouter([
    checkAuth() ? privateRoutes() : {},
    routes(),
  ]);
  return <RouterProvider router={router} />;
}

// function PrivateRoute({ isAuthenticated, redirectTo }) {
//   return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />
// }

export default App;
