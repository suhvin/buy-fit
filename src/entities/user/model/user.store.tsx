import { STORAGE_KEY } from '@/src/shared/configs/constant';
import type { UserType } from './user.model';
import { atom, useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import type { DeepPartial } from '@/src/shared/types';
import { withImmer } from 'jotai-immer';

const userAtom = withImmer(
  atomWithStorage<UserType>(STORAGE_KEY.USER, {
    id: '',
    jo: {
      jae: {
        chan: '',
      },
    },
  })
);

export const useUser = () => {
  const [user, setUser] = useAtom(userAtom);

  return [user, setUser] as const;
};

const Hello = () => {
  const [user, setUser] = useUser();
  return (
    <div className="">
      <button
        type="button"
        onClick={() => {
          setUser(state => {
            state.jo.jae.chan = 'hello';
          });
        }}
      >
        dsada
      </button>
    </div>
  );
};
