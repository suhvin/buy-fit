import './globals.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'quokka plate',
  description: 'by quokka crew',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
