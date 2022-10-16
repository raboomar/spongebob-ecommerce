import axios from "axios";

const saveOrder = async (cart, token) => {
  let url = process.env.REACT_APP_API_URL || "any-default-local-build_env";
  try {
    let data = JSON.stringify({
      date: new Date().toLocaleDateString(),
      ordered: cart,
    });

    let config =
      token == undefined
        ? {
            method: "post",
            url: `${url}order/add`,
            headers: {
              "Content-Type": "application/json",
            },
            data: data,
          }
        : {
            method: "post",
            url: `${url}order/add`,
            headers: {
              "x-auth-token": token.token,
              "Content-Type": "application/json",
            },
            data: data,
          };
    await axios(config);
  } catch (error) {
    return error;
  }
};

const orderService = {
  saveOrder,
};
export default orderService;
