import React, { useEffect } from "react";
import AddToCartBtn from "../addToCartBtn/AddToCartBtn";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrease, reset } from "../../redux/feature/qty/qtySlice";
import "./menuItem.css";
const MenuItem = ({ item }) => {
  const dispatch = useDispatch();
  const { qty } = useSelector((state) => state.qty);

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);
  return (
    <>
      <div className="menu-item-pic-container">
        <img className="menu-item-pic" src={item.imgUrl} alt={item.name} />
      </div>
      <div className="menu-item-abt">
        <div className="item-name">{item.name}</div>
        <div className="abt-item">
          What's On It
          <p>{item.description}</p>
        </div>

        <div className="available-item-qty">
          <p>Available Qty:{item.availableQty}</p>
        </div>

        <div className="qty-selection">
          <button
            onClick={() => {
              dispatch(decrease());
            }}
          >
            <FaMinus color="white" />
          </button>
          <input className="qty-input" type="text" readOnly value={qty} />
          <button
            onClick={() => {
              dispatch(increment(item.availableQty));
            }}
          >
            <FaPlus color="white" />
          </button>
        </div>

        <div className="add-to-cart-btn">
          <AddToCartBtn item={item} qtyNum={qty} />
        </div>
      </div>
    </>
  );
};

export default MenuItem;
