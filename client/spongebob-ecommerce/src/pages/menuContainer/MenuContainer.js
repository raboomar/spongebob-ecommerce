import React, { useEffect } from "react";
import Card from "../../components/menuItems/Card";
import { useSelector, useDispatch } from "react-redux";
import { fetchMenu } from "../../redux/feature/menu/menuSlice";
import "./menuContainer.css";
import Spinner from "../../components/spinner/Spinner";
const MenuContainer = () => {
  const dispatch = useDispatch();
  const { menu, isLoading } = useSelector((state) => state.menu);
  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="grid-container">
          {menu.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default MenuContainer;
