"use client";
import React from "react";
import { TanstackProvider } from "./tanstak-query";
import { persistor, store } from "@/src/shared/store/store";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
export const Provider = ({ children }: React.PropsWithChildren) => {
  return (
    <TanstackProvider>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </ReduxProvider>
    </TanstackProvider>
  );
};
