import React from "react";
import "./card.css";
const Card = ({ item }) => {
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
          // onClick={(e) => {
          //   removeBook(book._id);
          // }}
        >
          Add To Card
        </button>
      </div>
    </div>
  );
};

export default Card;
