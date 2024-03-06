import "./globals.css";

import type { Metadata } from "next";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import { ENV_GOOGLE } from "@/src/shared/constant/env";
import { Provider } from "@/src/app/initialize/provider";
import { removeConsoleWhenProduction } from "@/src/shared/util/environment/remove-console";
export const metadata: Metadata = {
  title: "quokka plate",
  description: "by quokka crew",
};

removeConsoleWhenProduction();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Provider>{children}</Provider>
        <GoogleAnalytics gaId={ENV_GOOGLE.gaId} />
        <GoogleTagManager gtmId={ENV_GOOGLE.gtmId} />
      </body>
    </html>
  );
}
