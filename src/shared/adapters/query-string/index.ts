import * as qs from "qs";

export const parseQs = <T extends Record<string, unknown>>(param?: string): T => {
  return qs.parse(param ? param.replace(/^\?/, "") : "") as T;
};

export const stringifyQs = (obj?: Record<string, unknown>): string => {
  return qs.stringify(obj ?? {}, { arrayFormat: "repeat" });
};
