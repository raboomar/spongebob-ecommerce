const increment = (qty) => {
  return (qty += 1);
};
const decrease = (qty) => {
  if (qty > 1) {
    return (qty -= 1);
  } else {
    return 1;
  }
};

const qtyService = {
  increment,
  decrease,
};
export default qtyService;
