import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
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
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
