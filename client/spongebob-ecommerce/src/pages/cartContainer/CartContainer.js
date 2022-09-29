import React from "react";
import "./cartContainer.css";
import { useSelector } from "react-redux";
import CartCard from "../../components/cart/CartCard";

const CartContainer = () => {
  const { cart } = useSelector((state) => state.cart);
  // console.log(cart);
  return (
    <section className="cart">
      <header>Your cart</header>
      <div>
        {cart.map((item) => (
          <CartCard item={item} />
        ))}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total
            {/* <span>${total.toFixed(2)}</span> */}
          </h4>
        </div>
        <button className="btn clear-btn">clear cart</button>
      </footer>
    </section>
  );
};

export default CartContainer;
