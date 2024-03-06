import { PubSubEvent, PubSubEventHandler, PubSubManager } from "@/packages/pub-sub/core";

const FIRE_BASE_LOG_EVENT = "FIREBASE_LOG_EVENT" as const;
export const GLUE = "_" as const;

export type FirebaseLogEvent = typeof FIRE_BASE_LOG_EVENT;
export type FEATURE = "mvp";
export type PAGE = "/root" | "/landing" | "login";
export type AT = "toast" | "bottom-sheet" | "dialog" | "banner" | "header" | "footer";
export type TARGET = "kiseock" | "garam" | "yechan";
export type ACTION =
  | "click"
  | "page"
  | "track"
  | "toast-up"
  | "toast-down"
  | "dialog-show"
  | "bottom-sheet-up"
  | "bottom-sheet-down";
export type GLUE = typeof GLUE;

export type LogCampaign = {
  who: string;
  where: string;
  when: string;
  what: string;
};

export type LogProperty<T extends Record<string, any> = {}> = {
  bootstraped: boolean;
  campaign: LogCampaign;
  randomId: string;
  referral: string;
  firstAccessDate: string;
  lastAccessDate: string;
  environment: string;
  device: string;
} & T;

export type EventName = `${FEATURE}${GLUE}${TARGET}${GLUE}${ACTION}`;
export type EventPath = `${FEATURE}${GLUE}${PAGE}${GLUE}${AT}${GLUE}${TARGET}`;
export type EventNameTuple = [FEATURE, TARGET, ACTION];
export type EventPathTuple = [FEATURE, PAGE, AT, TARGET];

export type CustomLogEvent = {
  type: FirebaseLogEvent;
  eventName: EventName;
  eventPath: EventPath;
  eventProperty: LogProperty;
};

export type LogEvent = PubSubEvent<CustomLogEvent & Record<string, any>>;
export type LogEventHandler = PubSubEventHandler<LogEvent>;
export const logger = new PubSubManager<LogEvent>();
