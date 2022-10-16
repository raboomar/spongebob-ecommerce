import React, { useEffect } from "react";
import PaymentForm from "../../components/checkout/payment/PaymentForm";
import CartSummaryContainer from "../cartSummaryContainer/CartSummaryContainer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./payment.css";
const Payment = () => {
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state.cart);

  useEffect(() => {
    if (cart.length === 0) {
      navigate("/menu");
    }
  }, []);

  return (
    <div className="payment-container">
      <div className="checkout-img">
        <img
          className="krabs-money"
          src="https://i.imgur.com/0DhwYok.jpg"
          alt="money talks"
        />
      </div>
      <div className="personal-info">
        <div className="credit-card-info">
          <div className="payment-section-title">
            <h4>Payment method</h4>
          </div>
          <PaymentForm />
        </div>
      </div>
      <div className="confirm">
        <div className="payment-section-title">
          <h4>Cart Summary </h4>
        </div>
        <CartSummaryContainer />
      </div>
    </div>
  );
};

export default Payment;
