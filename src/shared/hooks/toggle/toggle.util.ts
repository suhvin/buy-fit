export type NonEmptyArray<T> = readonly [T, ...T[]];

export const convertListToObject = <T extends NonEmptyArray<string>, Value>(
  list: T,
  value: Value
): Record<T[number], Value> => {
  return list.reduce(
    (obj, str) => {
      obj[str as T[number]] = value;
      return obj;
    },
    {} as { [key in T[number]]: Value }
  );
};
