"use client";
import { PubSubManager } from "@/src/shared/package/pub-sub/core";
import React from "react";
import { LogEvent, UserTracker, tupleToString } from "./type";
import { LogCollection } from "@/src/shared/firebase/collection/log";
import { useSelector } from "react-redux";
import { RootState } from "@/src/shared/store/store";
// import { sendGAEvent } from "@next/third-parties/google";

export const logger = new PubSubManager<LogEvent["logEvent"]>();

export const useLogger = (): UserTracker => {
  const state = useSelector((s: RootState) => s);

  const track: UserTracker["track"] = (eventNameTuple, eventPathTuple, eventProperty) => {
    const eventName = tupleToString<LogEvent["eventName"]>(eventNameTuple);
    const eventPath = tupleToString<LogEvent["eventPath"]>(eventPathTuple);
    // const eventUser = state.info;
    const eventCampaign = state.tag;

    logger.publish({
      type: "LOG_EVENT",
      eventName,
      eventPath,
      // eventUser,
      eventCampaign,
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
      const action = event.eventName.split("_");
      switch (true) {
        case action.includes("click"):
          LogCollection.createClickLog(event);
          break;
        case action.includes("page"):
          LogCollection.createPageLog(event);
          break;
        case action.includes("view"):
          LogCollection.createViewLog(event);
          break;
        case action.includes("track"):
          LogCollection.createTrackLog(event);
          break;
      }
    };
    logger.subscribe("LOG_EVENT", listener);
    return () => logger.unsubscribe("LOG_EVENT", listener);
  }, []);
  return null;
};

// const Hi = () => {
//   const { track } = useLogger();
//   track(['',',',''],['',',',''])
// };
