import React from "react";
import BillingDetails from "../../components/checkout/Billingdetails/BillingDetails";
import PaymentForm from "../../components/checkout/payment/PaymentForm";
import "./payment.css";
const Payment = () => {
  return (
    <div className="payment-container">
      <div className="personal-info">
        <div className="">
          <div className="payment-section-title">Billing details</div>
          <BillingDetails />
        </div>
        <div className="credit-card-info">
          <div className="payment-section-title">Payment method</div>
          <PaymentForm />
        </div>
      </div>
      <div className="confirm">
        <div>Summary</div>
        <div className="panel">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
