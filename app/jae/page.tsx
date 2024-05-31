'use client';
import { atom, createStore, Provider, useAtom } from 'jotai';
import type { PropsWithChildren } from 'react';

const myStore = createStore();
const chanAtom = atom(0);

const ChanComponent = () => {
  const [jo, setJo] = useAtom(chanAtom);
  return (
    <div className="">
      <button type="button" onClick={() => setJo(s => s + 1)}>
        {jo}
      </button>
    </div>
  );
};

const Page = () => {
  return (
    <Provider>
      <Provider store={myStore}>
        <ChanComponent />
      </Provider>
    </Provider>
  );
};
