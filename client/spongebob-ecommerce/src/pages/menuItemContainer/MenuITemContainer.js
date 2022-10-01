import React, { useEffect } from "react";
import MenuItem from "../../components/menuItem/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenuItem } from "../../redux/feature/menu/menuSlice";
import { useParams } from "react-router-dom";
import "./menuItemContainer.css";
const MenuITemContainer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { menuItem } = useSelector((state) => state.menu);

  useEffect(() => {
    dispatch(fetchMenuItem(id));
  }, [dispatch, id]);

  return (
    <div className="menu-item-container">
      {menuItem.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default MenuITemContainer;
