import axios from "axios";

const saveOrder = async (cart) => {
  let url = process.env.REACT_APP_API_URL || "any-default-local-build_env";
  try {
    let data = JSON.stringify({
      date: new Date().toLocaleDateString(),
      ordered: cart,
    });
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    await axios.post(`${url}order/add`, data, config);
  } catch (error) {
    return error;
  }
};

const orderService = {
  saveOrder,
};
export default orderService;
