import { Providers } from "@/src/@infrastructure/ui/component/shared/provider";
import "./globals.css";

import type { Metadata } from "next";
import { Toaster } from "@/src/@infrastructure/ui/component/ui/toaster";

export const metadata: Metadata = {
  title: "quokka plate",
  description: "by quokka crew",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
