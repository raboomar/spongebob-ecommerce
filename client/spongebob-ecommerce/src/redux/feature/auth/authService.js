import axios from "axios";

const register = async (user) => {
  let url = process.env.REACT_APP_API_URL || "any-default-local-build_env";
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify(user);
  let API_URL = `${url}user/add`;
  const res = await axios.post(API_URL, body, config);
  if (res.data) {
    localStorage.setItem("appUser", JSON.stringify(res.data));
  }
  return res.data;
};

const logout = async () => {
  localStorage.removeItem("appUser");
};
const login = async (user) => {
  let url = process.env.REACT_APP_API_URL || "any-default-local-build_env";
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify(user);
  let API_URL = `${url}user/login`;
  const res = await axios.post(API_URL, body, config);
  if (res.data) {
    localStorage.setItem("appUser", JSON.stringify(res.data));
  }
  return res.data;
};
const authService = {
  register,
  logout,
  login,
};
export default authService;
