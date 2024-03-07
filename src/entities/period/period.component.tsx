import { useEffect } from "react";
import { usePeriod, periodManager, periodSlice } from "./period.slice";
import { useDispatch } from "react-redux";
import { MyPeriodType, PeriodKey, PeriodPublish, PeriodRemove, PeriodTrigger } from "./period.model";
import { PubSubEventHandler } from "@/packages/pub-sub/core";

export const PeriodProvider = () => {
  const dispatch = useDispatch();
  const { isPeriodHit, findPeriod, state } = usePeriod();
  const updatePeriodEvent = (action: MyPeriodType) => {
    dispatch(periodSlice.actions.updatePeriodEvent(action));
  };
  const removePeriodEvent = (action: PeriodKey[]) => {
    dispatch(periodSlice.actions.removePeriodEvent(action));
  };
  const createPeriodEvent = (action: Omit<MyPeriodType, "periodDate" | "eventCount" | "isFirst">) => {
    dispatch(periodSlice.actions.createPeriodEvent(action));
  };
  useEffect(() => {
    const removeHandler: PubSubEventHandler<PeriodRemove> = (event) => {
      removePeriodEvent(event.removeKey);
    };
    const publishHandler: PubSubEventHandler<PeriodPublish> = (event) => {
      const { eventType, maximumEventCount, period } = event;
      createPeriodEvent({ eventType, maximumEventCount, period });
    };
    const triggerHandler: PubSubEventHandler<PeriodTrigger> = (event) => {
      const isHit = isPeriodHit(event.eventType);
      if (isHit) {
        const item = findPeriod(event.eventType)!;
        event.resolve?.();
        updatePeriodEvent(item);
      } else {
        event.reject?.();
      }
    };
    periodManager.subscribe("REMOVE_EVENT", removeHandler);
    periodManager.subscribe("PUBLISH_EVENT", publishHandler);
    periodManager.subscribe("TRIGGERING_EVENT", triggerHandler);
    return () => {
      periodManager.unsubscribe("REMOVE_EVENT", removeHandler);
      periodManager.unsubscribe("PUBLISH_EVENT", publishHandler);
      periodManager.unsubscribe("TRIGGERING_EVENT", triggerHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);
  return null;
};
