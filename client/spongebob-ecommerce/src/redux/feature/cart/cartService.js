const addToCart = (state, item) => {
  const selectedItem = item.item;
  const selectedQty = item.qty;
  let cart = state.cart;
  const foundItem = cart.find((cartItem) => cartItem.id === selectedItem.id);
  if (foundItem) {
    foundItem.qty += selectedQty;
  } else {
    cart.push({
      id: selectedItem.id,
      name: selectedItem.name,
      price: selectedItem.price,
      qty: selectedQty,
    });
  }
};

const increaseQty = (state, item) => {
  let cart = state.cart;
  const foundItem = cart.find((cartItem) => cartItem.id === item.id);
  foundItem.qty++;
};
const decreaseQty = (state, item) => {
  let cart = state.cart;
  const foundItem = cart.find((cartItem) => cartItem.id === item.id);

  foundItem.qty--;
};

const removeItem = (state, item) => {
  let cart = state.cart;
  return cart.filter((cartItem) => cartItem.id !== item.id);
};
const calculateQty = (state) => {
  let qty = 0;
  let cart = state.cart;
  cart.map((item) => (qty += item.qty));
  return qty;
};

const calculateTotal = (state) => {
  let total = 0;
  let cart = state.cart;
  cart.map((item) => (total += item.qty * item.price));
  return total;
};
const clearCart = () => {
  return [];
};
const cartService = {
  addToCart,
  calculateQty,
  increaseQty,
  decreaseQty,
  removeItem,
  calculateTotal,
  clearCart,
};
export default cartService;
