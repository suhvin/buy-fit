import type { Metadata } from 'next';
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
import { LoggerProvider } from '@/src/shared/modules/logger/use-logger';
import { Provider } from '@/src/app/provider/provider';
import { ENVIRONMENT_GOOGLE } from '@/src/shared/configs/environment';
import { fa } from '@/src/app/style/font/fa/fa';
import '../public/assets/css/main.css';

export const metadata: Metadata = {
  title: {
    default: 'buyfit',
    template: '%s - buyfit',
  },
  description: 'buyfit',
  verification: {},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <link rel="stylesheet" href="/assets/css/main.css" />
      </head>
      <body className="is-preload">
        <Provider>
          <div className={fa.className}>{children}</div>
        </Provider>
        <LoggerProvider />
        <GoogleAnalytics gaId={ENVIRONMENT_GOOGLE.GA_ID} />
        <GoogleTagManager gtmId={ENVIRONMENT_GOOGLE.GTM_ID} />
      </body>
    </html>
  );
}
