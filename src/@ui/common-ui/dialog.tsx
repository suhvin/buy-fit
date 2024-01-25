"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/@infrastructure/ui/component/ui/dialog";
import React from "react";

interface MyDialogProps {
  open: boolean;
  setOpen: (boo: boolean) => void;
  data?: {
    title: string;
    description: string;
    onClick?: (e: any) => void;
  };
}

export const MyDialog = ({ open, setOpen, data }: MyDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{data?.title}</DialogTitle>
          <DialogDescription>{data?.description}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
