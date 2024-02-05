"use client";
import React from "react";
import { TanstackProvider } from "./tanstak-query";
import { LoggerProvider } from "@/src/feature/logging/core";

export const Provider = ({ children }: React.PropsWithChildren) => {
  return (
    <TanstackProvider>
      {children}
      <LoggerProvider />
    </TanstackProvider>
  );
};
