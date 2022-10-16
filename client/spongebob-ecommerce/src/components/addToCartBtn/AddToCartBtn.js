import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, calculateQty } from "../../redux/feature/cart/cartSlice";
import "react-toastify/dist/ReactToastify.css";
const AddToCartBtn = ({ item, qtyNum }) => {
  const dispatch = useDispatch();

  return (
    <>
      <button
        className="menu-btn view-btn"
        onClick={(e) => {
          dispatch(addToCart({ item, qty: qtyNum }));
          dispatch(calculateQty());
        }}
      >
        Add To Cart
      </button>
    </>
  );
};

export default AddToCartBtn;
