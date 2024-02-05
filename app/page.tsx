"use client";
import { useLogger } from "@/src/feature/logging/core";
import React from "react";

export default function Home() {
  const { track } = useLogger();
  return (
    <main className="">
      <button
        onClick={() => {
          track(["", "", ""], ["", "", "", ""]);
        }}
      >
        로깅 예시
      </button>
    </main>
  );
}
