import { LogAtomCreator } from "@/src/@pacakges/logger/@types/creator/log-atom-creator";
import { LogEventCreator } from "@/src/@pacakges/logger/@types/creator/log-event-creator";
import { LogEventDetailCreator } from "@/src/@pacakges/logger/@types/creator/log-event-detail-creator";
import { LogNamePathCreator } from "@/src/@pacakges/logger/@types/creator/log-name-path-creator";
import { LogParamCreator } from "@/src/@pacakges/logger/@types/creator/log-param-creator";
import { LoggerPubSubManager } from "@/src/@pacakges/logger/core/listener";
import { LoggerService } from "@/src/@pacakges/logger/core/service";
import React from "react";

type FEATURE = "";
type PAGE = "";
type AT = "";
type TARGET = "";
type ACTION = "";
type GLUE = "_";
type KiseockAtom = LogAtomCreator<FEATURE, PAGE, AT, TARGET, ACTION>;
type KiseockUser = LogEventDetailCreator<"LOG_EVENT", {}, {}, {}>;
type KiseockLogEvent = LogEventCreator<KiseockUser, KiseockAtom>;

type KiseockLogNamePath = LogNamePathCreator<KiseockAtom, GLUE>;

const kiseockService = new LoggerService<KiseockUser, KiseockAtom, GLUE>();
const kiseockPubSub = new LoggerPubSubManager<KiseockLogEvent>();

type KiseockLogParam = LogParamCreator<typeof kiseockService>;
const LoggerProvider = ({ children }: { children?: React.ReactNode }) => {
  React.useEffect(() => {
    kiseockPubSub.initiate({
      LOG_EVENT: [
        (event) => {
          console.log(event);
          console.log("여기서 데이터베이스에 업데이트하는 코드 쓰면됩니다.");
        },
      ],
    });
    return () => kiseockPubSub.initialize();
  });
  return children;
};

const kiseockPublish = (logBody: KiseockLogParam) => {
  const logEvent = kiseockService.createLogEvent(logBody);
  kiseockPubSub.publish(logEvent);
};

const ClickLogger = ({
  children,
  eventName,
  eventPath,
  eventProperty,
}: {
  children: React.ReactElement;
  eventName: KiseockLogNamePath["eventNameTuple"];
  eventPath: KiseockLogNamePath["eventPathTuple"];
  eventProperty?: Record<string, any>;
}) => {
  const child = React.Children.only(children);
  const [user] = React.useState({ 나이: "대충 나이 같은 유저정보들" });
  return React.cloneElement(child, {
    onClick: (event: Event) => {
      kiseockPublish({
        type: "LOG_EVENT",
        eventName,
        eventPath,
        eventProperty,
        eventUser: user,
      });
    },
  });
};
