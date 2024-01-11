import { Providers } from "@/src/driver/ui/component/shared/provider";
import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "quokka plate",
  description: "by quokka crew",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
