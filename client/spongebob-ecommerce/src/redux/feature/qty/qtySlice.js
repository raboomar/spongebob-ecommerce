import { createSlice } from "@reduxjs/toolkit";
import qtyService from "./qtyService";

const initialState = {
  qty: 1,
};

export const qtySlice = createSlice({
  name: "qty",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.qty = qtyService.increment(state.qty, action.payload);
    },
    decrease: (state) => {
      state.qty = qtyService.decrease(state.qty);
    },
    reset: (state) => {
      state.qty = 1;
    },
  },
});

export const { increment, decrease, reset } = qtySlice.actions;
export default qtySlice.reducer;
