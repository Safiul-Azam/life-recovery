import { configureStore } from "@reduxjs/toolkit";
import namazReducer from "../features/namaz/namazSlice";

export const store = configureStore({
  reducer: {
    namaz: namazReducer,
  },
});
