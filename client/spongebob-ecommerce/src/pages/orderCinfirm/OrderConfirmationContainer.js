import React, { useEffect } from "react";
import OrderConfirmation from "../../components/orderConfirmation/OrderConfirmation";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./orderConfirm.css";
const OrderConfirmationContainer = () => {
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state.cart);

  useEffect(() => {
    if (cart.length === 0) {
      navigate("/menu");
    }
  }, []);
  return (
    <div className="order-confirm-container">
      <h3>Your order has been received</h3>
      <OrderConfirmation />
    </div>
  );
};

export default OrderConfirmationContainer;
