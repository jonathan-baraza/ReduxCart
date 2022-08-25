import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./slices/AuthSlice";
import ItemSlice from "./slices/ItemSlice";
const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    items: ItemSlice.reducer,
  },
});

export default store;
