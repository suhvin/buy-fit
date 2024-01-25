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

// 로거 프로바이더는 전역에 감싸줍니다.
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

// 이벤트 발행을 도와주는 유틸함수입니다.
const kiseockPublish = (logBody: KiseockLogParam) => {
  const logEvent = kiseockService.createLogEvent(logBody);
  kiseockPubSub.publish(logEvent);
};

// 래퍼컴포넌트는 이런식으로 ㅁ나들 수 있어요
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
  const { track } = useLogger();
  return React.cloneElement(child, {
    onClick: (event: Event) => {
      track(eventName, eventPath, eventProperty);
    },
  });
};

export type UserTracker = {
  track(
    eventName: KiseockLogNamePath["eventNameTuple"],
    eventPath: KiseockLogNamePath["eventPathTuple"],
    eventProperty?: Record<string, any>,
  ): void;
};

const useLogger = (): UserTracker => {
  const user = {
    age: "2041421살",
  };
  const track = (
    eventName: KiseockLogNamePath["eventNameTuple"],
    eventPath: KiseockLogNamePath["eventPathTuple"],
    eventProperty?: Record<string, any>,
  ) => {
    kiseockPublish({
      type: "LOG_EVENT",
      eventName,
      eventPath,
      eventProperty,
      eventUser: user,
    });
  };
  return {
    track,
  };
};
