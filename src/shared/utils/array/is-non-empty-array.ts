import type { NonEmptyArray } from './non-empty-array';

export function isNonEmptyArray<T>(array: T[]): array is NonEmptyArray<T> {
  return array.length >= 1;
}
