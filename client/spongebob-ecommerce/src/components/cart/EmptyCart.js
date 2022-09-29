import React from "react";

const EmptyCart = () => {
  return (
    <section className="cart">
      <header>
        <h2>your cart is currently empty</h2>

        <img
          className="empty-cart-img"
          alt="sad spongebob"
          src={require("../../assets/sadSpongebob.gif")}
        />
      </header>
    </section>
  );
};

export default EmptyCart;
