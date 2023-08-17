import { configureStore } from "@reduxjs/toolkit";

import { api } from "./api/apiSlice";
import userReducer from "./Features/user/userSlice";
import bookReducer from "./Features/books/bookSlice";


export const store = configureStore({
  reducer: {
    user: userReducer,
    book: bookReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
