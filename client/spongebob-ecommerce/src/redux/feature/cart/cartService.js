import { toast } from "react-toastify";

const notify = (name) => {
  toast.success(`${name} added to cart!`);
};

const addToCart = (state, item) => {
  const selectedItem = item.item;
  const selectedQty = item.qty;
  let cart = state.cart;
  const foundItem = cart.find((cartItem) => cartItem.id === selectedItem.id);
  if (foundItem) {
    if (foundItem.qty < item.item.availableQty) {
      foundItem.qty += selectedQty;
      notify(foundItem.name);
    }
  } else {
    cart.push({
      id: selectedItem.id,
      name: selectedItem.name,
      price: selectedItem.price,
      img: selectedItem.imgUrl,
      qty: selectedQty,
      availableQty: selectedItem.availableQty,
    });
    notify(selectedItem.name);
  }
};

const increaseQty = (state, item) => {
  let cart = state.cart;
  const foundItem = cart.find((cartItem) => cartItem.id === item.id);
  if (item.qty < item.availableQty) {
    foundItem.qty++;
  }
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
