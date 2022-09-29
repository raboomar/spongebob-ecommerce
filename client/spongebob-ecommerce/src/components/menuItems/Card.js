import React from "react";
import "./card.css";
import { useDispatch } from "react-redux";
import { addToCart, calculateQty } from "../../redux/feature/cart/cartSlice";

const Card = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="grid-item">
      <div className="card">
        <h4>{item.name}</h4>
        <h5>{item.image}</h5>

        <button
          className="menu-btn"
          // onClick={() => {
          //   edit(book);
          // }}
        >
          View
        </button>
        <button
          className="menu-btn view-btn"
          onClick={(e) => {
            dispatch(addToCart(item));
            dispatch(calculateQty());
          }}
        >
          Add To Card
        </button>
      </div>
    </div>
  );
};

export default Card;
