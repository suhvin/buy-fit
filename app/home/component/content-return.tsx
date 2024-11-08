import Image from 'next/image';
import React from 'react';

const ContentReturn = () => {
  return (
    <section id="one" className="main special">
      <div className="container">
        <span className="image fit primary">
          <Image src="/images/pic-30-2.png" alt="" width={500} height={300} />
        </span>
        <div className="content">
          <header className="major">
            <h2>의류 반품률 30%</h2>
          </header>
          <p>
            온라인 의류의 반품률은 30%로 오프라인의 3배 이상이에요. 어째서 그럴까요? 다들 예상하고 계시겠지만 입어보지
            못하고 사기 때문이죠. 그렇다고 오프라인에서만 쇼핑을 하자니, 온라인에서만 살 수 있는 이쁜 옷들이 너무 많이
            있어요.
          </p>
        </div>
        <a href="#two" className="goto-next scrolly">
          Next
        </a>
      </div>
    </section>
  );
};

export default ContentReturn;
