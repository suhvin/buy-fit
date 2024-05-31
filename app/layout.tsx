import "../src/app/style/root.css";
import type { Metadata } from "next";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import { LoggerProvider } from "@/src/shared/modules/logger/use-logger";
import { Provider } from "@/src/app/provider/provider";
import { ENVIRONMENT_GOOGLE } from "@/src/shared/configs/environment";

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
        <GoogleAnalytics gaId={ENVIRONMENT_GOOGLE.GA_ID} />
        <GoogleTagManager gtmId={ENVIRONMENT_GOOGLE.GTM_ID} />
      </body>
    </html>
  );
}
