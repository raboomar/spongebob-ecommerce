import React from "react";
import "./cartConfirm.css";

const CartConfirm = ({ item }) => {
  return (
    <div className="cart-confirm-item">
      <img src={item.img} alt={item.name} />
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

export default CartConfirm;
