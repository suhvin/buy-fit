"use client";

import React from "react";
import Text from "./text";
import { useTemplateHook } from "../context";

export const TextContainer = () => {
  const template = useTemplateHook();
  return <Text>{template.text}</Text>;
};
