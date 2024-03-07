import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MyPeriodType, PeriodCreateType, PeriodKey, PeriodPubsubEvent, PeriodTriggerType } from "./period.model";
import { useSelector } from "react-redux";
import { RootState } from "@/src/shared/store/store";
import { isDifferenceGreaterThanSeconds } from "./period.lib";
import { PubSubManager } from "@/packages/pub-sub/core";

export const periodManager = new PubSubManager<PeriodPubsubEvent>();

const initialState: MyPeriodType[] = [];

const DEFAULT_MAXIMUM_COUNT = 10 as const;
const DEFAULT_PERIOD_SECOND = 60 * 60 * 24 * 7; // 초로 계산하며 7일 간격

export const periodSlice = createSlice({
  name: "periodSlice",
  initialState: initialState,
  reducers: {
    createPeriodEvent: (state, action: PayloadAction<PeriodCreateType>) => {
      const { eventType, period, maximumEventCount } = action.payload;
      const newPeriod: MyPeriodType = {
        eventType,
        eventCount: 0,
        maximumEventCount: maximumEventCount ?? DEFAULT_MAXIMUM_COUNT,
        period: period ?? DEFAULT_PERIOD_SECOND,
        periodDate: new Date().toISOString(),
      };
      const isUniqueKey = !state.some((item) => item.eventType === action.payload.eventType);
      return isUniqueKey ? state.concat(newPeriod) : state;
    },
    updatePeriodEvent: (state, action: PayloadAction<MyPeriodType>) => {
      const { eventType, maximumEventCount, period, eventCount } = action.payload;
      const newPeriod: MyPeriodType = {
        eventType,
        period,
        maximumEventCount,
        eventCount: eventCount + 1,
        periodDate: new Date().toISOString(),
      };
      return state.map((item) => (item.eventType === newPeriod.eventType ? newPeriod : item));
    },
    removePeriodEvent: (state, action: PayloadAction<PeriodKey[]>) => {
      return state.filter((item) => !action.payload.includes(item.eventType));
    },
  },
});

export const usePeriod = () => {
  const state = useSelector((s: RootState) => s.period);
  const isPeriodHit = (key: PeriodKey) => {
    const periodEvent = state.find((item) => item.eventType === key);
    if (!periodEvent) return false;
    if (periodEvent.eventCount === 0) return true;
    if (periodEvent.eventCount >= (periodEvent.maximumEventCount ?? DEFAULT_MAXIMUM_COUNT)) return false;
    return isDifferenceGreaterThanSeconds(
      periodEvent.periodDate,
      new Date().toISOString(),
      periodEvent.period ?? DEFAULT_PERIOD_SECOND,
    );
  };
  const findPeriod = (key: PeriodKey) => {
    return state.find((item) => item.eventType === key);
  };
  const triggerPeriod = ({ eventType, resolve, reject }: PeriodTriggerType) => {
    periodManager.publish({ type: "TRIGGERING_EVENT", eventType, resolve, reject });
  };
  const removePeriod = (removeKey: PeriodKey[]) => {
    periodManager.publish({ type: "REMOVE_EVENT", removeKey });
  };
  const publishPeriod = (action: Omit<MyPeriodType, "periodDate" | "eventCount" | "isFirst">) => {
    periodManager.publish({ type: "PUBLISH_EVENT", ...action });
  };

  return {
    isPeriodHit,
    findPeriod,
    state,
    triggerPeriod,
    removePeriod,
    publishPeriod,
  };
};
