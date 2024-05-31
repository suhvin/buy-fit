import localFont from 'next/font/local';

export const SUIT = localFont({
  src: [
    {
      path: './SUIT-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './SUIT-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './SUIT-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './SUIT-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
});
