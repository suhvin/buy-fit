type PUBLISH = { type: "PUBLISH_EVENT" };
type REMOVE = { type: "REMOVE_EVENT" };
type TRIGGER = { type: "TRIGGERING_EVENT" };
type CALLBACK = { resolve?: () => void; reject?: () => void };

export type PeriodKey = "smore-promotion" | "hello-promotion";

export type PeriodType<T extends string = string> = {
  eventType: T;
  period?: number;
  periodDate: string;
  maximumEventCount?: number;
  eventCount: number;
};
export type PeriodTriggerType = {
  eventType: PeriodKey;
  reject?: () => void;
  resolve?: () => void;
};

export type PeriodCreateType = Omit<MyPeriodType, "periodDate" | "eventCount" | "isFirst">;
export type PeriodPublish = PUBLISH & Omit<PeriodType<PeriodKey>, "periodDate" | "eventCount" | "isFirst">;
export type PeriodRemove = REMOVE & { removeKey: PeriodKey[] };
export type PeriodTrigger = TRIGGER & CALLBACK & Pick<PeriodType<PeriodKey>, "eventType">;
export type PeriodPubsubEvent = PeriodPublish | PeriodRemove | PeriodTrigger;
export type MyPeriodType = PeriodType<PeriodKey>;
