import React from "react";
import "./cartSummary.css";
const CartSummaryCard = ({ item }) => {
  return (
    <div className="cart-summary-item">
      <div className="summary-name">
        <p>{item.name}</p>
      </div>

      <div className="summary-qty">
        <p>Qty:{item.qty}</p>
      </div>
      <div className="summary-price">
        <p>${item.price}</p>
      </div>
    </div>
  );
};

export default CartSummaryCard;
