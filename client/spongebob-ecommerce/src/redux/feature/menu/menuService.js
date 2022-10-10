import axios from "axios";
const fetchMenu = async () => {
  let url = process.env.REACT_APP_API_URL;
  try {
    let data = await axios.get(`${url}menu`);
    return data.data;
  } catch (error) {
    return error;
  }
};

const fetchMenuItem = (state, action) => {
  let menu = state.menu;
  state.menuItem = [];
  let menuItemSelected = menu.filter((item) => item.id === action);
  return menuItemSelected;
};
const menuService = {
  fetchMenu,
  fetchMenuItem,
};

export default menuService;
