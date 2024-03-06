export type PeriodType<T extends string = string> = {
  type: T;
  isFirst?: boolean;
  period?: number;
  periodDate: string;
  maximumEventCount?: number;
  eventCount: number;
};
