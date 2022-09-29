import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./navbar.css";
const Navbar = () => {
  const { totalQty } = useSelector((state) => state.cart);

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
          <Link to="/cart"> {totalQty} Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
