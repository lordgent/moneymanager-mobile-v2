// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth/AuthSlice";
import profileReducer from './reducers/profile/ProfileSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
