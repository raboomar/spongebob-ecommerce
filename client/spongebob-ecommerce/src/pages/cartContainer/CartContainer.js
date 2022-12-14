import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartCard from "../../components/cart/CartCard";
import { calculateTotal } from "../../redux/feature/cart/cartSlice";
import EmptyCart from "../../components/cart/EmptyCart";
import Modal from "../../components/modal/Modal";
import { openModal } from "../../redux/feature/modal/modalSlice";
import { useNavigate } from "react-router-dom";
import "./cartContainer.css";
const CartContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart, totalAmount } = useSelector((state) => state.cart);
  const { isModalOpen } = useSelector((state) => state.modal);
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cart, dispatch]);

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <section className="cart">
      {isModalOpen && <Modal />}
      <h3>Your cart</h3>
      <div>
        {cart.map((item) => (
          <CartCard key={item.id} item={item} />
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
        <div className="clear-cart-container">
          <button
            className="btn clear-btn"
            onClick={() => {
              dispatch(openModal());
            }}
          >
            clear cart
          </button>
        </div>

        <div className="clear-cart-checkout">
          <button
            className="checkout-btn"
            onClick={() => {
              navigate("/payment");
            }}
          >
            Check out
          </button>
        </div>
      </footer>
    </section>
  );
};

export default CartContainer;
