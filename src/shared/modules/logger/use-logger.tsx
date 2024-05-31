"use client";
import { MergedQuokkaLogEvent, QuokkaLogEvent, QuokkaLogEventHandler, glue } from "./logger.type";
import { PubSubManager } from "../pub-sub/core";
import { PropsWithChildren, useEffect } from "react";

const loggerManager = new PubSubManager<MergedQuokkaLogEvent>();

const LoggerRepository = {
  create: async (event: unknown) => {
    console.group("😍 Quokka Log Event PubSub Start");
    await new Promise((res) => setTimeout(res, 10));
    console.log(`we received event Data :`);
    console.dir(event);
    console.log(`logger is working`);
    console.groupEnd();
  },
};

export const useLogger = () => {
  const track = (tuple: QuokkaLogEvent["logEventParam"]["0"], property?: QuokkaLogEvent["logEventParam"]["1"]) => {
    const eventName = [tuple[0], tuple[3], tuple[4]].join(glue) as QuokkaLogEvent["eventName"];
    const eventPath = [tuple[0], tuple[1], tuple[2], tuple[3]].join(glue) as QuokkaLogEvent["eventPath"];
    const eventProperty = Object.assign({ eventPath }, property ?? {}) as QuokkaLogEvent["eventProperty"];
    loggerManager.publish({ type: "LOG_EVENT", eventName, eventProperty });
  };
  return { track };
};

export const LoggerProvider = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    const handler: QuokkaLogEventHandler = ({ eventName, eventProperty }) => {
      LoggerRepository.create({ eventName, eventProperty });
    };
    loggerManager.subscribe("LOG_EVENT", handler);
    return () => loggerManager.unsubscribe("LOG_EVENT", handler);
  }, []);

  return children;
};
