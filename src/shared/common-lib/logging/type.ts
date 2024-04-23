import { LogEventCreator } from "@/src/shared/package/logger/core";
import { TagType } from "@/src/shared/store/slice/tag-slice";

export type UserTracker = {
  track: (
    eventName: LogEvent["eventNameTuple"],
    eventPath: LogEvent["eventPathTuple"],
    eventProperty?: Record<string, any>,
  ) => void;
};

export const createFeature = (nation: string, item: string): FEATURE => {
  return `${nation.toUpperCase()}-${item.toUpperCase()}` as FEATURE;
};

export const createPage = (pathList: string[]): PAGE => {
  return `/${pathList.slice(2).concat()}` as PAGE;
};

export type FEATURE = "KR-P1" | "JP-P1";
export type PAGE = "/download" | "/home" | "/pay" | "/pay-fail" | "/pay-success" | "/upload";
export type AT = "floating-bottom" | "top" | "default";
export type TARGET =
  | "go-to-upload"
  | "go-to-pay"
  | "go-to-pg"
  | "retry-upload"
  | "go-to-friend-insta"
  | "pay-success-api-success"
  | "pay-success-api-fail"
  | PAGE;
export type ACTION = "page" | "view" | "track" | "click";
export const glue = "_";
export type GLUE = typeof glue;

export type LogObject = {
  type: "LOG_EVENT";
  // eventUser: InfoType;
  eventCampaign: TagType;
};

export type LogEvent = LogEventCreator<FEATURE, PAGE, AT, TARGET, ACTION, LogObject, GLUE>;

export const tupleToString = <T>(tuple: readonly [...string[]]) => {
  return tuple.join(glue) as T;
};

export const stringToTuple = <T>(text: string) => {
  return text.split(glue) as T;
};
