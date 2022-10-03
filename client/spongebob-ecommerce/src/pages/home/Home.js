import React from "react";
import welcome from "../../assets/welcome.jpeg";
import "./home.css";
const Home = () => {
  return (
    <div className="home">
      <h3 className="home-title">
        Welcome To The Krusty Krab, may we take your order?
      </h3>
      <img className="home-img" src={welcome} alt="" />
    </div>
  );
};

export default Home;
