'use client';

import { useAtom } from 'jotai';
import { withImmer } from 'jotai-immer';
import { atomWithStorage } from 'jotai/utils';

type AuthType = {
  randomId: string;
};

const authGlobalAtom = withImmer(
  atomWithStorage<AuthType>(
    'auth',
    {
      randomId: '',
    },
    undefined,
    { getOnInit: true }
  )
);

export const useAuthGlobalAtom = () => {
  const [atom, setAtom] = useAtom(authGlobalAtom);
  const setter = (auth: AuthType) => {
    return setAtom(prev => {
      return {
        ...prev,
        ...auth,
      };
    });
  };
  return [atom, setter] as const;
};
