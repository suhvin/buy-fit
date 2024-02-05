import { LogEventCreator } from "@/src/shared/package/logger/core";

export type UserTracker = {
  track: (
    eventName: LogEvent["eventNameTuple"],
    eventPath: LogEvent["eventPathTuple"],
    eventProperty?: Omit<LogObject, "type">,
  ) => void;
};

export type FEATURE = "";
export type PAGE = "";
export type AT = "";
export type TARGET = "";
export type ACTION = "";
export const glue = "_";
export type GLUE = typeof glue;

export type LogObject = {
  type: "LOG_EVENT";
};

export type LogEvent = LogEventCreator<FEATURE, PAGE, AT, TARGET, ACTION, LogObject, GLUE>;

export const tupleToString = <T>(tuple: readonly [...string[]]) => {
  return tuple.join(glue) as T;
};

export const stringToTuple = <T>(text: string) => {
  return text.split(glue) as T;
};
