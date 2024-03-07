import { useEffect } from "react";
import { LogEventHandler, logger } from "./log.model";
import { logApi } from "./log.api";
import { useLog } from "./log.slice";

export const LogProvider = () => {
  const { bootstrap, updateCampaign } = useLog();

  useEffect(() => {
    bootstrap();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    updateCampaign();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handler: LogEventHandler = (log) => {
      console.group("😎 logevent");
      console.log(log);
      console.groupEnd();
      // 아래 라인 주석 해제하면 실제로 로그 찍힙니다.
      //   logApi(log);
    };
    logger.subscribe("FIREBASE_LOG_EVENT", handler);
    return () => logger.unsubscribe("FIREBASE_LOG_EVENT", handler);
  }, []);
  return null;
};
