import axios from "axios";

// const getDate = () => {
//   let date = new Date(year, month, day, hours, minutes);
//   return `${date.getMonth()}-${date.getDay()}-${date.getFullYear()}`;
// };

const saveOrder = async (cart) => {
  let url = process.env.REACT_APP_API_URL;
  try {
    let data = JSON.stringify({
      customerId: "Guest",
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
