"use client";
import React from "react";
import { TanstackProvider } from "./tanstak-query";

export const Provider = ({ children }: React.PropsWithChildren) => {
  return <TanstackProvider>{children}</TanstackProvider>;
};
