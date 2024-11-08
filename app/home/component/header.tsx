import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <section id="header">
      <header className="major">
        <h1>BUY FIT</h1>
        <p>
          온라인 쇼핑몰 옷을 입어보고 사고 싶나요?
          <br />
          바이핏이 여러분을 도와드려요
        </p>
      </header>
      <div className="container">
        <ul className="actions special">
          <li>
            <a href="#one" className="button primary scrolly">
              Begin
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Header;
