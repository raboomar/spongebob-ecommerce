import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, calculateQty } from "../../redux/feature/cart/cartSlice";
import { ToastContainer } from "react-toastify";
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
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default AddToCartBtn;
