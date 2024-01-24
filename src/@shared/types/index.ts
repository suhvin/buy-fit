export type NonEmptyArray<T> = readonly [T, ...T[]];
export type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends object ? RecursivePartial<T[P]> : T[P];
};
