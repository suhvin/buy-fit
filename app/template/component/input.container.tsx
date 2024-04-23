"use client";

import React from "react";
import Input from "./input";
import { useTemplateDispatchHook } from "../context";

export const InputContainer = () => {
  const templateDispatch = useTemplateDispatchHook();
  return (
    <Input
      onChange={(e) => {
        templateDispatch.setTemplate((state) => ({
          ...state,
          text: e.target.value,
        }));
      }}
    />
  );
};
