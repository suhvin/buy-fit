// app/page.tsx
'use client';
import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import ContentReturn from './component/content-return';
import ContentBuyFit from './component/content-buy-fit';
import Footer from './component/footer';
import Header from './component/header';
import ContentHard from './component/content-hard';
import ContentFree from './component/content-free';

export default function HomePage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    if (typeof window !== 'undefined') {
      const $ = require('jquery');
      window.jQuery = $;

      // jQuery 초기화 코드
      $(document).ready(() => {
        document.body.classList.remove('is-preload');
      });
    }
  }, []);

  if (!isClient) {
    return null; // 초기 렌더링 중에는 아무것도 렌더링하지 않음
  }

  return (
    <>
      <Header />
      <ContentReturn />
      <ContentHard />
      <ContentBuyFit />
      <ContentFree />
      <Footer />

      {/* JavaScript 파일 로드 */}
      <Script src="/assets/js/jquery.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/jquery.scrollex.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/jquery.scrolly.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/browser.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/breakpoints.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/util.js" strategy="lazyOnload" />
      <Script src="/assets/js/main.js" strategy="lazyOnload" />
    </>
  );
}