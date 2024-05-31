export type NonEmptyArray<T> = readonly [T, ...T[]];
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
