import "./globals.css";

import type { Metadata } from "next";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import { ENV_GOOGLE } from "@/src/shared/configs/env";
import { Provider } from "@/src/app/initialize/provider";
import { LoggerProvider } from "@/src/shared/modules/logger/use-logger";

export const metadata: Metadata = {
  title: {
    default: "quokkaplate",
    template: "%s - quokkaplate",
  },
  description: "quokkaplate",
  verification: {},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Provider>{children}</Provider>
        <LoggerProvider />
        <GoogleAnalytics gaId={ENV_GOOGLE.gaId} />
        <GoogleTagManager gtmId={ENV_GOOGLE.gtmId} />
      </body>
    </html>
  );
}
