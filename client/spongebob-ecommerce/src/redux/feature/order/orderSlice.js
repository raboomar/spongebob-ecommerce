import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import orderService from "./orderService";

const initialState = {
  order: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const saveOrder = createAsyncThunk(
  "saveOrder",
  async (cart, thunkAPI) => {
    try {
      return await orderService.saveOrder(cart);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(saveOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(saveOrder.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(saveOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.error;
      });
  },
});

export default orderSlice.reducer;
