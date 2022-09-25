import React from "react";
import welcome from "../../assets/welcome.jpeg";
const Home = () => {
  return (
    <div>
      <h3>Welcome To The Krusty Krab, may we take your order?</h3>
      <img src={welcome} alt="" />
    </div>
  );
};

export default Home;
