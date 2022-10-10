import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "../feature/cart/cartSlice";
import modalReducer from "../feature/modal/modalSlice";
import menuReducer from "../feature/menu/menuSlice";
import qtyReducer from "../feature/qty/qtySlice";
import orderReducer from "../feature/order/orderSlice";
const menuPersistConfig = {
  key: "menu",
  storage,
};
const cartPersistConfig = {
  key: "cart",
  storage,
};

// const menuPersistedReducer = persistReducer(menuPersistConfig, menuReducer);

const cartPersistedReducer = persistReducer(cartPersistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    cart: cartPersistedReducer,
    modal: modalReducer,
    menu: menuReducer,
    qty: qtyReducer,
    order: orderReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
