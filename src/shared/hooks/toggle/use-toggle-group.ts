'use client';
import React from 'react';

export const useToggleGroup = <ToggleKeys extends NonEmptyArray<string>>(keyList: ToggleKeys) => {
  const [toggleGroup, setToggleGroup] = React.useState(() => convertListToObject(keyList, false));
  const onToggle = (target: ToggleKeys[number]) => {
    setToggleGroup(obj => {
      const newObj = {} as Record<ToggleKeys[number], boolean>;
      for (const toggle in obj) {
        if (toggle === target && !obj[toggle as ToggleKeys[number]]) {
          newObj[toggle as ToggleKeys[number]] = true;
        } else {
          newObj[toggle as ToggleKeys[number]] = false;
        }
      }
      return newObj;
    });
  };
  return [toggleGroup, onToggle, setToggleGroup] as const;
};

type NonEmptyArray<T> = readonly [T, ...T[]];

const convertListToObject = <T extends NonEmptyArray<string>, Value>(
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
