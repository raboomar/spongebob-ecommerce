import React from "react";
import { useNavigate } from "react-router-dom";
import AddToCartBtn from "../addToCartBtn/AddToCartBtn";
import "./card.css";
const Card = ({ item }) => {
  const navigate = useNavigate();
  const viewItem = () => {
    navigate(`/menu/${item.id}`);
  };
  return (
    <div className="grid-item">
      <div className="card" onClick={viewItem}>
        <div className="menu-items-name">
          <h5>{item.name}</h5>
        </div>
        <div className="menu-items-img">
          <img className="items-img" src={item.imgUrl} alt={item.name} />
        </div>
        <div className="menu-items-price">
          <h6>${item.price}</h6>
        </div>

        <div className="menu-items-btn">
          <button className="menu-btn" onClick={viewItem}>
            View
          </button>
          <AddToCartBtn item={item} qtyNum={1} />
        </div>
      </div>
    </div>
  );
};

export default Card;
