import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const routeReducer = combineReducers({ user: userReducer });
const persisteConfig = {
  key: "root",
  storage,
  version: 1,
};
const persistedTReducer = persistReducer(persisteConfig, routeReducer);
export const store = configureStore({
  reducer: persistedTReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
