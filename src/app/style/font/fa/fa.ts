import localFont from 'next/font/local';

export const fa = localFont({
  src: [
    {
      path: './fa-brands-400.woff2',
      weight: '400',
      style: 'brands',
    },
    {
      path: './fa-regular-400.woff2',
      weight: '400',
      style: 'regular',
    },
    {
      path: './fa-solid-900.woff2',
      weight: '900',
      style: 'solid',
    },
  ],
  display: 'swap',
});
