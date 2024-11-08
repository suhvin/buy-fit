import Image from 'next/image';
import React from 'react';

const ContentFree = () => {
  return (
    <section id="four" className="main special">
      <div className="container">
        <span className="image fit primary">
          <Image src="/images/pic-free.png" alt="" width={500} height={300} />
        </span>
        <div className="content">
          <header className="major">
            <h2>무료 피팅 EVENT</h2>
          </header>
          <p>
            BUY FIT 피팅룸은 연세대 신촌캠퍼스에서 처음 운영을 시작합니다! 현재 무료 피팅 이벤트를 진행중이며, 이벤트
            기간 동안은 필수적인 소정의 인건비만을 받고 있어요. (선착순으로 적정 인원을 넘으면 이벤트가 종료됩니다.)
          </p>
        </div>
        <a href="#footer" className="goto-next scrolly">
          Next
        </a>
      </div>
    </section>
  );
};

export default ContentFree;
