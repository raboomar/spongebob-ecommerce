import { createSlice } from "@reduxjs/toolkit";
import cartService from "./cartService.js";

const initialState = {
  cart: [],
  totalAmount: 0,
  totalQty: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      cartService.addToCart(state, action.payload);
    },
    increaseQty: (state, action) => {
      cartService.increaseQty(state, action.payload);
      state.totalQty = cartService.calculateQty(state);
    },
    decreaseQty: (state, action) => {
      cartService.decreaseQty(state, action.payload);
      state.totalQty = cartService.calculateQty(state);
    },
    removeItem: (state, action) => {
      state.cart = cartService.removeItem(state, action.payload);
      state.totalQty = cartService.calculateQty(state);
    },
    calculateQty: (state) => {
      state.totalQty = cartService.calculateQty(state);
    },
    calculateTotal: (state) => {
      state.totalAmount = cartService.calculateTotal(state);
    },
    clearCart: (state) => {
      state.cart = cartService.clearCart();
      state.totalQty = cartService.calculateQty(state);
    },
  },
});

export const {
  addToCart,
  calculateQty,
  increaseQty,
  decreaseQty,
  removeItem,
  calculateTotal,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
