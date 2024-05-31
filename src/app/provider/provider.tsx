"use client";
import React from "react";
import { TanstackProvider } from "./tanstak-query";
import { TagProvider } from "./tag-provider";
export const Provider = ({ children }: React.PropsWithChildren) => {
  return (
    <TanstackProvider>
      <TagProvider>
        <div className="  w-full h-full min-h-screen flex items-center justify-center bg-[#F5F5F5]">
          <div className=" relative w-full min-h-screen h-full bg-white xs:w-[450px]">{children}</div>
        </div>
      </TagProvider>
    </TanstackProvider>
  );
};
