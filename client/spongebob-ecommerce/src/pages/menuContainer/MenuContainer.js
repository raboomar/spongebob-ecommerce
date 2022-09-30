import React, { useEffect } from "react";
import Card from "../../components/menuItems/Card";
import "./menuContainer.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchMenu } from "../../redux/feature/menu/menuSlice";
const MenuContainer = () => {
  const dispatch = useDispatch();
  const { menu } = useSelector((state) => state.menu);

  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);
  return (
    <div className="grid-container">
      {menu.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default MenuContainer;
