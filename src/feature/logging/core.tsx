"use client";
import { PubSubManager } from "@/src/shared/package/pub-sub/core";
import React from "react";
import { LogEvent, UserTracker, tupleToString } from "./type";
// import { sendGAEvent } from "@next/third-parties/google";

export const logger = new PubSubManager<LogEvent["logEvent"]>();

export const useLogger = (): UserTracker => {
  const track: UserTracker["track"] = (eventNameTuple, eventPathTuple, eventProperty) => {
    const eventName = tupleToString<LogEvent["eventName"]>(eventNameTuple);
    const eventPath = tupleToString<LogEvent["eventPath"]>(eventPathTuple);

    logger.publish({
      type: "LOG_EVENT",
      eventName,
      eventPath,
    });
  };
  return { track };
};

export const LoggerProvider = () => {
  React.useEffect(() => {
    // if you want to use GA Event
    // sendGAEvent({ event: "helloworld", value: "hello" });
    const listener = (event: LogEvent["logEvent"]) => {
      console.group("😉 hello world this is logging");
      console.log("event : ", event);
      console.groupEnd();
    };
    logger.subscribe("LOG_EVENT", listener);
    return () => logger.unsubscribe("LOG_EVENT", listener);
  }, []);
  return null;
};
