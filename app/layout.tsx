import "./globals.css";

import type { Metadata } from "next";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import { ENV } from "@/src/shared/constant/env";
import { Provider } from "@/src/app/initialize/provider";
export const metadata: Metadata = {
  title: "quokka plate",
  description: "by quokka crew",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Provider>{children}</Provider>
        <GoogleAnalytics gaId={ENV.gaId} />
        <GoogleTagManager gtmId={ENV.gtmId} />
      </body>
    </html>
  );
}
