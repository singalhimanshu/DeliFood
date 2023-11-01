import React, { useState, useEffect } from "react";
import Button from "./Button";
import "../styles/Navbar.css";
import { FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import CartButton from "../cart/CartButton";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUserName] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const { username } = JSON.parse(localStorage.getItem("user"));
      setIsLoggedIn(true);
      setUserName(username);
    }
  }, []); // @@@: decide dep array

  const handleClick = () => {
    console.log("Button was clicked!");
  };
  return (
    <div className="navbar flex-sb">
      <div className="nav-icon flex-center">
        <h2>
          <Link to="/">DeliFooD</Link>
        </h2>
      </div>
      <div className="nav-menu flex-se">
        <div className="nav-list flex-se">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="nav-btn flex btn">
          {isLoggedIn ? (
            <Button
              redirectTo={""}
              onClick={() => {
                // call logout api and after that remove from localstorage
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                window.location.reload();
              }}
              name={username}
            />
          ) : (
            <Button
              onClick={handleClick}
              redirectTo={"signin"}
              name="sign in"
              icon={<FaSignInAlt />}
            />
          )}

          <CartButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
