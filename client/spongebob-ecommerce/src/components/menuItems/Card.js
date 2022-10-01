import React from "react";
import { useNavigate } from "react-router-dom";
import AddToCartBtn from "../addToCartBtn/AddToCartBtn";
import "./card.css";
const Card = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="grid-item">
      <div className="card">
        <h4>{item.name}</h4>
        <h5>{item.image}</h5>

        <button
          className="menu-btn"
          onClick={() => {
            navigate(`/menu/${item.id}`);
          }}
        >
          View
        </button>
        <AddToCartBtn item={item} qtyNum={1} />
      </div>
    </div>
  );
};

export default Card;
