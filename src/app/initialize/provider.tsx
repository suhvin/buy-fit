"use client";
import React from "react";
import { TanstackProvider } from "./tanstak-query";
import { persistor, store } from "@/src/shared/store/store";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "@/src/shared/common-ui/toast/toaster";
import { TagProvider } from "@/src/shared/common-lib/tag/tag.provider";
import LoggerContainer from "@/src/shared/common-lib/logging/logger.container";
import { LoggerProvider } from "@/src/shared/common-lib/logging/core";
import { ToastContextProvider } from "@/src/shared/common-ui/toast/use-toast";
export const Provider = ({ children }: React.PropsWithChildren) => {
  return (
    <TanstackProvider>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <TagProvider>
            <ToastContextProvider>
              <div className="  w-full h-full min-h-screen flex items-center justify-center bg-[#F5F5F5]">
                <div className=" relative w-full min-h-screen h-full bg-white xs:w-[450px]">{children}</div>
              </div>
              <LoggerContainer />
              <LoggerProvider />
              <Toaster />
            </ToastContextProvider>
          </TagProvider>
        </PersistGate>
      </ReduxProvider>
    </TanstackProvider>
  );
};
