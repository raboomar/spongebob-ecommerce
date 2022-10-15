import axios from "axios";
const fetchMenu = async () => {
  let url = process.env.REACT_APP_API_URL || "any-default-local-build_env";
  try {
    let data = await axios.get(`${url}menu`);
    return data.data;
  } catch (error) {
    return error;
  }
};

const fetchMenuItem = async (id) => {
  let url = process.env.REACT_APP_API_URL;
  let data = await axios.get(`${url}menu/${id}`);
  return data.data;
};
const menuService = {
  fetchMenu,
  fetchMenuItem,
};

export default menuService;
