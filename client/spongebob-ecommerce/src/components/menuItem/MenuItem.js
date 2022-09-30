import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenuItem } from "../../redux/feature/menu/menuSlice";
const MenuItem = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { menuItem } = useSelector((state) => state.menu);

  useEffect(() => {
    dispatch(fetchMenuItem(id));
  }, [dispatch, id]);
  console.log(menuItem);

  return <div>MenuItem</div>;
};

export default MenuItem;
