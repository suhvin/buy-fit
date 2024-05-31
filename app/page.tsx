"use client";

import { useLogger } from "@/src/shared/modules/logger/use-logger";
import React from "react";

interface pageProps {}

const Page = ({}: pageProps) => {
  const { track } = useLogger();
  return (
    <div className=" flex flex-col">
      <button onClick={() => track(["quokka", "home", "toast", "toast", "click"])}>클릭하면 로깅 스타트</button>
    </div>
  );
};

export default Page;
