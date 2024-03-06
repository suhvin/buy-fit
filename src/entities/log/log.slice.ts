import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import {
  CustomLogEvent,
  EventName,
  EventNameTuple,
  EventPath,
  EventPathTuple,
  GLUE,
  LogEvent,
  logger,
} from "./log.model";
import { RootState } from "@/src/shared/store/store";
import { useSearchParams } from "next/navigation";
import { createCustomId, tupleToString } from "./log.lib";

type OmitTypeEvent = Omit<CustomLogEvent, "type">["property"];
const initialState: OmitTypeEvent = {
  bootstraped: false,
  randomId: "",
  referral: "",
  firstAccessDate: "",
  lastAccessDate: "",
  environment: "",
  campaign: {
    who: "",
    where: "",
    when: "",
    what: "",
  },
};

export const logSlice = createSlice({
  name: "logSlice",
  initialState: initialState,
  reducers: {
    updateLogProperty: (state, action: PayloadAction<Partial<OmitTypeEvent>>) => {
      const list = Object.entries(action.payload ?? {});
      list.forEach(([key, value]) => {
        //@ts-expect-error
        state[key] = value;
      });
    },
  },
});

const { updateLogProperty } = logSlice.actions;

export const useLog = () => {
  const dispatch = useDispatch();
  const state = useSelector((s: RootState) => s.log);
  const searchParams = useSearchParams();
  const propertyUpdater = (user: Partial<OmitTypeEvent>) => {
    dispatch(updateLogProperty(user));
  };
  const updateCampaign = () => {
    const who = searchParams.get("who") ?? "";
    const when = searchParams.get("when") ?? "";
    const where = searchParams.get("where") ?? "";
    const what = searchParams.get("what") ?? "";
    const isCampaign = [who, when, where, what].every((item) => item !== "");

    if (isCampaign) {
      propertyUpdater({ campaign: { who, when, where, what } });
    }
  };

  const bootstrap = () => {
    updateCampaign();
    const environment = process.env.NODE_ENV;
    const date = new Date().toISOString();
    if (state.bootstraped) {
      return propertyUpdater({ lastAccessDate: date, environment: environment });
    } else {
      propertyUpdater({
        lastAccessDate: date,
        firstAccessDate: date,
        environment: environment,
        randomId: createCustomId(),
        referral: document.referrer ?? "direct",
        bootstraped: true,
      });
    }
  };
  const track = (nameTuple: EventNameTuple, pathTuple: EventPathTuple, eventProperty?: Record<string, any>) => {
    const eventName = tupleToString<EventName>(nameTuple, GLUE);
    const eventPath = tupleToString<EventPath>(pathTuple, GLUE);
    logger.publish({
      type: "FIREBASE_LOG_EVENT",
      eventName,
      eventPath,
      property: { ...state, ...eventProperty },
    });
  };

  return { bootstrap, updateCampaign, track };
};
