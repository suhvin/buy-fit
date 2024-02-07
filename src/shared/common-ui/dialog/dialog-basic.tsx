"use client";
import * as ModalPrimitive from "@radix-ui/react-dialog";
import React from "react";

interface labelProps {
  isOpen: boolean;
  onOpenChange: (bool: boolean) => void;
  children?: React.ReactNode;
}

export const DialogBasic = ({ isOpen, children, onOpenChange }: labelProps) => {
  return (
    <ModalPrimitive.Root open={isOpen} onOpenChange={onOpenChange}>
      <ModalPrimitive.Overlay className="fixed inset-0 z-30 bg-neutral-60"></ModalPrimitive.Overlay>
      <ModalPrimitive.Content className="fixed max-w-[calc(420px-48px)] w-[calc(100%-48px)] left-[50%] bottom-[50%] translate-x-[-50%] z-40 ">
        {children}
      </ModalPrimitive.Content>
    </ModalPrimitive.Root>
  );
};
