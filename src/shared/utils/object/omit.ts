import { type ObjectKeys, objectKeys } from './object-keys';
import type { ElementType } from './types';

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function omit<ObjectType extends Record<PropertyKey, any>, KeyTypes extends Array<ObjectKeys<ObjectType>>>(
  obj: ObjectType,
  keys: KeyTypes
) {
  return (
    objectKeys(obj)
      .filter((k): k is Exclude<ObjectKeys<ObjectType>, ElementType<KeyTypes>> => !keys.includes(k))
      // biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
      // biome-ignore lint/style/noCommaOperator: <explanation>
      .reduce((acc, key) => ((acc[key] = obj[key]), acc), {} as Omit<ObjectType, ElementType<KeyTypes>>)
  );
}
