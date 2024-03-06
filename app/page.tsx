"use client";
import { useLog } from "@/src/entities/log/log.slice";
import { useToast } from "@/src/shared/common-ui/toast/use-toast";
import React from "react";

interface pageProps {}

const Page = ({}: pageProps) => {
  const { track } = useLog();
  const { toast } = useToast();

  return (
    <div>
      <button
        onClick={() => {
          track(["mvp", "kiseock", "click"], ["mvp", "/landing", "toast", "kiseock"]);
          toast({
            title: "hello",
            description: "world",
          });
        }}
      >
        온클릭하면 이벤트 발행
      </button>
    </div>
  );
};

export default Page;
