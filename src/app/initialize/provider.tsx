"use client";
import React from "react";
import { TanstackProvider } from "./tanstak-query";
import { Toaster } from "@/src/shared/common-ui/toast/toaster";
import { TagProvider } from "@/src/shared/common-lib/tag/tag.provider";
import { ToastContextProvider } from "@/src/shared/common-ui/toast/use-toast";
export const Provider = ({ children }: React.PropsWithChildren) => {
  return (
    <TanstackProvider>
      <TagProvider>
        <ToastContextProvider>
          <div className="  w-full h-full min-h-screen flex items-center justify-center bg-[#F5F5F5]">
            <div className=" relative w-full min-h-screen h-full bg-white xs:w-[450px]">{children}</div>
          </div>
          <Toaster />
        </ToastContextProvider>
      </TagProvider>
    </TanstackProvider>
  );
};
