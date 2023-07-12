import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./itemRedux";

export const store = configureStore({
  reducer: {
    item: itemReducer,
  },
});
