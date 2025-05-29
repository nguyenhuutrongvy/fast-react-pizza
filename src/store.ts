import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

export default store;

// Infer the `RootState` type from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Infer the `AppDispatch` type from the store itself
export type AppDispatch = typeof store.dispatch;
