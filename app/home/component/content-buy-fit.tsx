import Image from 'next/image';
import React from 'react';

const ContentBuyFit = () => {
  return (
    <section id="three" className="main special">
      <div className="container">
        <span className="image fit primary">
          <Image src="/images/pic-text.png" alt="" width={500} height={300} />
        </span>
        <div className="content">
          <header className="major">
            <h2>BUY FIT</h2>
          </header>
          <p>
            바이핏은 온라인 의류 여러벌을 한 번에 피팅할 수 있는 오프라인 피팅룸이에요! 배송받고 입어보고 반품하는 모든
            과정을 바이핏과 함께해요.
          </p>
          <ul className="icons-grid">
            <li>
              <Image src="/images/ic-truck.png" alt="" width={48} height={48} />
              <h3>배송받고</h3>
            </li>
            <li>
              <Image src="/images/ic-shirt.png" alt="" width={48} height={48} />
              <h3>입어보고</h3>
            </li>
            <li>
              <Image src="/images/ic-recycle.png" alt="" width={48} height={48} />
              <h3>정리하고</h3>
            </li>
            <li>
              <Image src="/images/ic-box.png" alt="" width={48} height={48} />
              <h3>반품하고</h3>
            </li>
          </ul>
        </div>
        <a href="#four" className="goto-next scrolly">
          Next
        </a>
      </div>
    </section>
  );
};

export default ContentBuyFit;
