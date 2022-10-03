import React from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  removeItem,
} from "../../redux/feature/cart/cartSlice";
import "./cart.css";
const CartCard = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="cart-item">
      <img src={item.img} alt={item.title} />
      <div>
        <h4>{item.name}</h4>
        <h4 className="item-price">${item.price}</h4>
        <button
          className="remove-btn"
          onClick={() => {
            dispatch(removeItem(item));
          }}
        >
          remove
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() => {
            dispatch(increaseQty(item));
          }}
        >
          <FaChevronUp />
        </button>
        <p className="amount">{item.qty}</p>
        <button
          className="amount-btn"
          onClick={() => {
            if (item.qty === 1) {
              dispatch(removeItem(item));
              return;
            }
            dispatch(decreaseQty(item));
          }}
        >
          <FaChevronDown />
        </button>
      </div>
    </div>
  );
};

export default CartCard;
