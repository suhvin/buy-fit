import { LogCollection } from "@/src/shared/db/collection/collection-log";

export const logApi = async (log: Record<string, any>) => {
  const event = await LogCollection.createLog(log);
  return event;
};
