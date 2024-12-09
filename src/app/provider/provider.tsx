'use client';
import type React from 'react';
import { TanstackProvider } from './tanstak-query';
import { Provider as JotaiProvider } from 'jotai';
import PageLoggerProvider from './page-logger-provider';
import { TagProvider } from './tag-provider';
import { Suspense } from 'react';

export const Provider = ({ children }: React.PropsWithChildren) => {
  return (
    <TanstackProvider>
      <JotaiProvider>
        <Suspense>
          <div className="  w-full h-full min-h-screen flex items-center justify-center bg-[#F5F5F5]">
            <div className=" relative w-full min-h-screen h-full bg-white xs:w-[450px]">{children}</div>
          </div>
          <PageLoggerProvider />
          <TagProvider />
        </Suspense>
      </JotaiProvider>
    </TanstackProvider>
  );
};
