import { LogCollection } from '@/src/shared/firebase/collection/log';
import { useAuthGlobalAtom } from '@/src/shared/store/auth.store';
import { useUtmGlobalAtom } from '@/src/shared/store/utm.store';
import { usePathname, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

const PageLoggerProvider = () => {
  const pathname = usePathname();

  const [utmGlobalAtom, _] = useUtmGlobalAtom();
  const [authGlobalAtom, setAuthGlobalAtom] = useAuthGlobalAtom();
  const randomId = authGlobalAtom.randomId;
  const isRandomIdUpdate = !randomId || randomId === '';
  const newRandomId = makeRandomId();
  if (isRandomIdUpdate) {
    setAuthGlobalAtom({ randomId: newRandomId });
  }

  useEffect(() => {
    LogCollection.createPageLog({ randomId, ...utmGlobalAtom });
  }, [pathname, randomId, utmGlobalAtom]);

  return <></>;
};

export default PageLoggerProvider;

export function makeRandomId() {
  const now = new Date();
  const year = now.getFullYear(); // 년도
  const month = now.getMonth() + 1; // 월
  const date = now.getDate(); // 날짜
  const day = now.getDay(); // 요일
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  const random = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;

  return (
    addZero(year).slice(2, 4) +
    addZero(month) +
    addZero(date) +
    addZero(hour) +
    addZero(minute) +
    addZero(second) +
    random
  );
}

function addZero(num: number) {
  let numZero = String(num);
  if (Number(numZero) < 10) {
    numZero = '0' + numZero;
  }
  return numZero;
}
