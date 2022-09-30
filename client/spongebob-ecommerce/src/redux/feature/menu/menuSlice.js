import { createSlice } from "@reduxjs/toolkit";
import menuService from "./menuService";

const initialState = {
  menu: [],
  menuItem: [],
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    fetchMenu: (state) => {
      state.menu = menuService.fetchMenu();
    },
    fetchMenuItem: (state, action) => {
      state.menuItem = menuService.fetchMenuItem(state, action.payload);
    },
  },
});

export const { fetchMenu, fetchMenuItem } = menuSlice.actions;
export default menuSlice.reducer;
