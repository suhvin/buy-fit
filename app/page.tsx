"use client";
import { useLog } from "@/src/entities/log/log.slice";
import { usePeriod } from "@/src/entities/period/period.slice";
import { useToast } from "@/src/shared/common-ui/toast/use-toast";
import React from "react";

interface pageProps {}

const Page = ({}: pageProps) => {
  const { track } = useLog();
  const { toast } = useToast();
  const { publishPeriod, triggerPeriod, removePeriod, state } = usePeriod();
  console.dir(state);
  return (
    <div className=" flex flex-col">
      <div className="">{state.map((item) => item.eventType)}</div>
      <button
        onClick={() => {
          publishPeriod({ eventType: "hello-promotion", maximumEventCount: 3, period: 5 });
        }}
      >
        페리오드 퍼블리시하기
      </button>
      <button
        onClick={() => {
          removePeriod(["hello-promotion"]);
        }}
      >
        페리오드 지우기
      </button>
      <button
        onClick={() => {
          triggerPeriod({
            eventType: "hello-promotion",
            resolve: () => console.log("trigger hello"),
            reject: () => console.log("reject"),
          });
        }}
      >
        페리오드 트리거하기
      </button>
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
