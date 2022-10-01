import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../feature/cart/cartSlice";
import modalReducer from "../feature/modal/modalSlice";
import menuReducer from "../feature/menu/menuSlice";
import qtyReducer from "../feature/qty/qtySlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
    menu: menuReducer,
    qty: qtyReducer,
  },
});
