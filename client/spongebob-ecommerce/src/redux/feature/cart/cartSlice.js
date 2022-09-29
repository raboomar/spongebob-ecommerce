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
    calculateQty: (state) => {
      state.totalQty = cartService.calculateQty(state);
    },
  },
});

export const { addToCart, calculateQty } = cartSlice.actions;

export default cartSlice.reducer;
