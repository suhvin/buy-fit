import { STORAGE_KEY } from '@/src/shared/configs/constant';
import type { UserType } from './user.model';
import { atom, useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

const userAtom = atomWithStorage<UserType>(STORAGE_KEY.USER, { id: '' });

export const useUser = () => {
  return useAtom(userAtom);
};
