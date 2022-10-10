import React from "react";
import OrderConfirmation from "../../components/orderConfirmation/OrderConfirmation";

import "./orderConfirm.css";
const OrderConfirmationContainer = () => {
  return (
    <div className="order-confirm-container">
      <h3>Your order has been received</h3>
      <OrderConfirmation />
    </div>
  );
};

export default OrderConfirmationContainer;
