// src/store.ts
import { configureStore } from "@reduxjs/toolkit";
import emailReducer from "./features/emailSlice";
import authReducer from "./features/dashboard/authSlice";
import dataReducer from "./features/dashboard/dataSlice";

export const store = configureStore({
  reducer: {
    emails: emailReducer,
    auth: authReducer,
    data: dataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
