import React from "react";
import Card from "../../components/menuItems/Card";
import "./menuContainer.css";
const MenuContainer = () => {
  const FAKEDATA = [
    { id: 1, price: 2.99, name: "test1", image: "url1" },
    { id: 2, price: 4.99, name: "test2", image: "ur2" },
    { id: 3, price: 65.99, name: "test3", image: "url3" },
    { id: 4, price: 1.99, name: "test4", image: "url4" },
  ];

  return (
    <div className="grid-container">
      {FAKEDATA.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default MenuContainer;
