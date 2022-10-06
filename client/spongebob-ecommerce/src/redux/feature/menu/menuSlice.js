import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import menuService from "./menuService";

const initialState = {
  menu: [],
  isLoading: false,
  isSuccessful: false,
  isError: false,
  errorMessage: "",
  menuItem: [],
};

export const fetchMenu = createAsyncThunk("fetchMenu", async (_, thunkAPI) => {
  try {
    return await menuService.fetchMenu();
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    return thunkAPI.rejectWithValue(message);
  }
});

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    fetchMenuItem: (state, action) => {
      state.menuItem = menuService.fetchMenuItem(state, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenu.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMenu.fulfilled, (state, action) => {
        state.isLoading = false;
        state.menu = action.payload;
        state.isSuccessful = true;
      })
      .addCase(fetchMenu.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      });
  },
});

export const { fetchMenuItem } = menuSlice.actions;
export default menuSlice.reducer;
