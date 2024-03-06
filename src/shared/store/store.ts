import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { exampleSlice } from "./slice/example-slice";
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import { logSlice } from "@/src/entities/log/log.slice";

const createNoopStorage = () => {
  return {
    getItem(_key: any) {
      return Promise.resolve(null);
    },
    setItem(_key: any, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: any) {
      return Promise.resolve();
    },
  };
};
const storage = typeof window === "undefined" ? createNoopStorage() : createWebStorage("local");
const PERSIST_KEY = "quokka";
const persistConfig = { key: PERSIST_KEY, storage };
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({ example: exampleSlice.reducer, log: logSlice.reducer }),
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = Omit<ReturnType<typeof store.getState>, "_persist">;
export type AppDispatch = typeof store.dispatch;
