const addToCart = (state, item) => {
  let cart = state.cart;
  const foundItem = cart.find((cartItem) => cartItem.id === item.id);
  if (foundItem) {
    foundItem.qty++;
  } else {
    cart.push({ id: item.id, name: item.name, price: item.price, qty: 1 });
  }
};

const calculateQty = (state) => {
  let qty = 0;
  let cart = state.cart;
  cart.map((item) => (qty += item.qty));
  return qty;
};

const cartService = {
  addToCart,
  calculateQty,
};
export default cartService;
