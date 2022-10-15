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

export const fetchMenuItem = createAsyncThunk(
  "fetchMenuItem",
  async (id, thunkAPI) => {
    try {
      return await menuService.fetchMenuItem(id);
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

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
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
      })
      .addCase(fetchMenuItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMenuItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.menuItem = action.payload;
        state.isSuccessful = true;
      })
      .addCase(fetchMenuItem.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      });
  },
});

// export const { fetchMenuItem } = menuSlice.actions;
export default menuSlice.reducer;
