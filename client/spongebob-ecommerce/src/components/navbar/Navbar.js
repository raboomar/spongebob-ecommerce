import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

import { logout, reset } from "../../redux/feature/auth/authSlice";
import "./navbar.css";

const Navbar = () => {
  const { totalQty } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { appUser } = useSelector((state) => state.auth);
  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <nav className="navbar-container">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/menu">Menu</Link>
        </li>

        <li className="cart-link">
          <Link to="/cart">
            <FaShoppingCart color="white" />
            <span>{totalQty}</span>
          </Link>
        </li>

        {appUser ? (
          <li className="register-link">
            <Link
              to="/"
              onClick={() => {
                handleLogout();
              }}
            >
              Logout
            </Link>
          </li>
        ) : (
          <li className="register-link">
            <Link to="/register">Register/Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
