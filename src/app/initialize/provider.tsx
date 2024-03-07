"use client";
import React from "react";
import { TanstackProvider } from "./tanstak-query";
import { persistor, store } from "@/src/shared/store/store";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { LogProvider } from "@/src/entities/log/log.component";
import { Toaster } from "@/src/shared/common-ui/toast/toaster";
import { PeriodProvider } from "@/src/entities/period/period.component";
export const Provider = ({ children }: React.PropsWithChildren) => {
  return (
    <TanstackProvider>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
          <LogProvider />
          <PeriodProvider />
          <Toaster />
        </PersistGate>
      </ReduxProvider>
    </TanstackProvider>
  );
};
