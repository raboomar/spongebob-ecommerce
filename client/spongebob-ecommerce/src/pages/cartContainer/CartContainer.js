import React, { useEffect } from "react";
import "./cartContainer.css";
import { useSelector, useDispatch } from "react-redux";
import CartCard from "../../components/cart/CartCard";
import { calculateTotal } from "../../redux/feature/cart/cartSlice";
const CartContainer = () => {
  const dispatch = useDispatch();
  const { cart, totalAmount } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cart, dispatch]);
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
            <span>${totalAmount.toFixed(2)}</span>
          </h4>
        </div>
        <button className="btn clear-btn">clear cart</button>
      </footer>
    </section>
  );
};

export default CartContainer;
