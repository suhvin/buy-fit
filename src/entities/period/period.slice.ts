import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PeriodType } from "./period.model";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/src/shared/store/store";
import { isDifferenceGreaterThanSeconds } from "./period.lib";
import { PubSubManager } from "@/packages/pub-sub/core";

export type PeriodKey = "smore-promotion" | "hello-promotion";

export type MyPeriodType = PeriodType<PeriodKey>;

export const periodManager = new PubSubManager<{ type: PeriodKey }>();

const initialState: MyPeriodType[] = [];

const DEFAULT_MAXIMUM_COUNT = 10 as const;
const DEFAULT_PERIOD_SECOND = 60 * 60 * 24 * 7; // 초로 계산하며 7일 간격

export const periodSlice = createSlice({
  name: "periodSlice",
  initialState: initialState,
  reducers: {
    createPeriodEvent: (state, action: PayloadAction<Omit<MyPeriodType, "periodDate" | "eventCount" | "isFirst">>) => {
      const { type, period, maximumEventCount } = action.payload;
      const newPeriod: MyPeriodType = {
        type,
        eventCount: 0,
        maximumEventCount: maximumEventCount ?? DEFAULT_MAXIMUM_COUNT,
        period: period ?? DEFAULT_PERIOD_SECOND,
        periodDate: new Date().toISOString(),
        isFirst: true,
      };
      const isUniqueKey = !state.some((item) => item.type === action.payload.type);
      return isUniqueKey ? state.concat(newPeriod) : state;
    },
    updatePeriodEvent: (state, action: PayloadAction<MyPeriodType>) => {
      const { type, maximumEventCount, period, eventCount } = action.payload;
      const newPeriod: MyPeriodType = {
        type,
        period,
        maximumEventCount,
        isFirst: false,
        eventCount: eventCount + 1,
        periodDate: new Date().toISOString(),
      };
      return state.map((item) => (item.type === newPeriod.type ? newPeriod : item));
    },
    removePeriodEvent: (state, action: PayloadAction<PeriodKey[]>) => {
      return state.filter((item) => !action.payload.includes(item.type));
    },
  },
});

export const usePeriod = () => {
  const dispatch = useDispatch();
  const state = useSelector((s: RootState) => s.period);
  const isPeriodHit = (key: string) => {
    const periodEvent = state.find((item) => item.type === key);
    if (!periodEvent) return false;
    if (periodEvent.eventCount >= (periodEvent.maximumEventCount ?? DEFAULT_MAXIMUM_COUNT)) return false;
    return isDifferenceGreaterThanSeconds(
      periodEvent.periodDate,
      new Date().toISOString(),
      periodEvent.period ?? DEFAULT_PERIOD_SECOND,
    );
  };
  const updatePeriodEvent = (action: MyPeriodType) => {
    dispatch(periodSlice.actions.updatePeriodEvent(action));
  };
  const removePeriodEvent = (action: PeriodKey[]) => {
    dispatch(periodSlice.actions.removePeriodEvent(action));
  };
  const createPeriodEvent = (action: Omit<MyPeriodType, "periodDate" | "eventCount" | "isFirst">) => {
    dispatch(periodSlice.actions.createPeriodEvent(action));
  };
  return {
    isPeriodHit,
    updatePeriodEvent,
    removePeriodEvent,
    createPeriodEvent,
  };
};
