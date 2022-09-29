import React from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import "./cart.css";
const CartCard = ({ item }) => {
  console.log(item);
  return (
    <article className="cart-item">
      <img
      // src={img} alt={title}
      />
      <div>
        <h4>{item.name}</h4>
        <h4 className="item-price">{item.price}</h4>
        <button
          className="remove-btn"
          // onClick={() => {
          //   dispatch(removeItem(id));
          // }}
        >
          remove
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          // onClick={() => {
          //   dispatch(increase({ id }));
          // }}
        >
          <FaChevronUp />
        </button>
        <p className="amount">{item.qty}</p>
        <button
          className="amount-btn"
          // onClick={() => {
          //   if (amount === 1) {
          //     dispatch(removeItem(id));
          //     return;
          //   }
          //   dispatch(decrease({ id }));
          // }}
        >
          <FaChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartCard;
