import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import { tagSlice } from "./slice/tag-slice";

const createNoopStorage = () => {
  return {
    getItem(_key: unknown) {
      return Promise.resolve(null);
    },
    setItem(_key: unknown, value: unknown) {
      return Promise.resolve(value);
    },
    removeItem(_key: unknown) {
      return Promise.resolve();
    },
  };
};
const storage = typeof window === "undefined" ? createNoopStorage() : createWebStorage("local");
const PERSIST_KEY = "quokka";
const persistConfig = { key: PERSIST_KEY, storage };
const persistedReducer = persistReducer(persistConfig, combineReducers({ tag: tagSlice.reducer }));

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: true,
});

export const persistor = persistStore(store);

export type RootState = Omit<ReturnType<typeof store.getState>, "_persist">;
export type AppDispatch = typeof store.dispatch;
