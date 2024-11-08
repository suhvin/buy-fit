import Image from 'next/image';
import React from 'react';

const ContentHard = () => {
  return (
    <section id="two" className="main special">
      <div className="container">
        <span className="image fit primary">
          <Image src="/images/pic-box-3.png" alt="" width={500} height={300} />
        </span>
        <div className="content">
          <header className="major">
            <h2>번거로운 반품</h2>
          </header>
          <p>
            입어봤을 때 마음에 안드는 옷이 있다면, 반품하면 돼죠. 그치만... 배송받고 열어보고 입어보고 정리하고 밀봉하고
            반품하고 너무 번거롭지 않나요? 만약, 오프라인처럼 여러벌을 입어보고 하나를 고르고 싶다면 어떡하죠?
          </p>
        </div>
        <a href="#three" className="goto-next scrolly">
          Next
        </a>
      </div>
    </section>
  );
};

export default ContentHard;
