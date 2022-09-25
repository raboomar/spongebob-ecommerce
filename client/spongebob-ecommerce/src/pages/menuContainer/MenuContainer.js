import React from "react";
import Card from "../../components/menuItems/Card";
import "./menuContainer.css";
const MenuContainer = () => {
  const FAKEDATA = [
    { name: "test1", image: "url" },
    { name: "test1", image: "url" },
    { name: "test1", image: "url" },
    { name: "test1", image: "url" },
  ];

  return (
    <div className="grid-container">
      {FAKEDATA.map((item) => (
        <Card item={item} />
      ))}
    </div>
  );
};

export default MenuContainer;
