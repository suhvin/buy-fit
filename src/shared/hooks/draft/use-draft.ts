import { useState } from 'react';

type UseDraftProps<T> = {
  initialState: T;
  onCommit?: ((state: T) => Promise<void>) | ((state: T) => void);
};

export const useDraft = <T>(props: UseDraftProps<T>) => {
  const [draft, setDraft] = useState<T>();
  const value = draft ?? props?.initialState;
  const onChangeValue = setDraft;
  const onCommit = () => {
    return props?.onCommit?.(value);
  };
  return { value, onChangeValue, onCommit };
};
