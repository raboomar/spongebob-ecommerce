import React from "react";
import PaymentForm from "../../components/checkout/payment/PaymentForm";
import CartSummaryContainer from "../cartSummaryContainer/CartSummaryContainer";
import "./payment.css";
const Payment = () => {
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
