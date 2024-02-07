"use client";
import { useLogger } from "@/src/feature/logging/core";
import { DialogBasic } from "@/src/shared/common-ui/dialog/dialog-basic";
import React from "react";

export default function Home() {
  const { track } = useLogger();
  const [open, setOpen] = React.useState(false);
  return (
    <main className="">
      <button
        onClick={() => {
          track(["", "", ""], ["", "", "", ""]);
        }}
      >
        로깅 예시
      </button>
      <button onClick={() => setOpen(true)}>dsadsa</button>
      <DialogBasic isOpen={open} onOpenChange={setOpen}>
        children
      </DialogBasic>
    </main>
  );
}
