import type { NonEmptyArray } from './non-empty-array';

export function last<T>(arr: NonEmptyArray<T>): T;
export function last<T>(arr: T[]): T | undefined;
export function last<T>(arr: T[]): T | undefined {
  return arr[arr.length - 1];
}
