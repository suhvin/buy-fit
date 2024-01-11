"use client";
import React from "react";
import { useFunnel } from "./hook/funnel/use-funnel";

interface exampleProps {}

const Example = ({}: exampleProps) => {
  const [Funnel, setStep] = useFunnel(["hi", "hello"] as const);
  return (
    <div>
      <Funnel>
        <Funnel.Step name={"hi"}>
          <div className="">
            <div className=""> hi 컴포넌트</div>
            <button onClick={() => setStep("hello")}>hello로 가기</button>
          </div>
        </Funnel.Step>
        <Funnel.Step name={"hello"}>
          <div className="">
            <div className=""> hello 컴포넌트</div>
            <button onClick={() => setStep("hi")}>hi로 가기</button>
          </div>
        </Funnel.Step>
      </Funnel>
    </div>
  );
};

export default Example;
