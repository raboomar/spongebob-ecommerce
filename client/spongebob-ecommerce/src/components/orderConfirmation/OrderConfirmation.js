import React, { useEffect } from "react";
import yayy from "../../assets/yayy.jpg";
// import CartConfirm from "./CartConfirm";
import { clearCart } from "../../redux/feature/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import "./orderconfirmation.css";
import Spinner from "../spinner/Spinner";
const OrderConfirmation = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.order);

  useEffect(() => {
    // dispatch(saveOrder(cart));
    dispatch(clearCart());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="order-confirm">
      <div className="order-img">
        <img className="order-confirm-img" src={yayy} alt="yayy" />
      </div>

      {/* <div className="userinfo">userinfo</div>

      <div className="cart-info">
        {cart.map((item) => (
          <CartConfirm key={item.id} item={item} />
        ))}
      </div> */}
    </div>
  );
};

export default OrderConfirmation;
