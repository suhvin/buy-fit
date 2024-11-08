'use client';

import { useAtom } from 'jotai';
import { withImmer } from 'jotai-immer';
import { atomWithStorage } from 'jotai/utils';

type UtmType = {
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmContent: string;
  utmTerm: string;
};

const utmGlobalAtom = withImmer(
  atomWithStorage<UtmType>('utm', {
    utmSource: '',
    utmMedium: '',
    utmCampaign: '',
    utmContent: '',
    utmTerm: '',
  })
);

export const useUtmGlobalAtom = () => {
  const [atom, setAtom] = useAtom(utmGlobalAtom);
  const setter = (utm: UtmType) => {
    return setAtom(prev => {
      return {
        ...prev,
        ...utm,
      };
    });
  };
  return [atom, setter] as const;
};
