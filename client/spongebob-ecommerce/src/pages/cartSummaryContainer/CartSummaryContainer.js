import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotal } from "../../redux/feature/cart/cartSlice";
import CartSummaryCard from "../../components/checkout/cartSummary/CartSummaryCard";

import "./cartSummaryContainer.css";
const CartSummaryContainer = () => {
  const dispatch = useDispatch();
  const { cart, totalAmount } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cart, dispatch]);
  return (
    <section className="summary-container">
      <div className="summary-card">
        {cart.map((item) => (
          <CartSummaryCard key={item.id} item={item} />
        ))}
      </div>
      <footer>
        <hr />
        <div className="summary-total">
          <h4>
            Total:
            <span>${totalAmount.toFixed(2)}</span>
          </h4>
        </div>
      </footer>
    </section>
  );
};

export default CartSummaryContainer;
