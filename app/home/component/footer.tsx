'use client';
import { makeRandomId } from '@/src/app/provider/page-logger-provider';
import { LogCollection } from '@/src/shared/firebase/collection/log';
import { useAuthGlobalAtom } from '@/src/shared/store/auth.store';
import { useUtmGlobalAtom } from '@/src/shared/store/utm.store';
import type React from 'react';
import { useEffect, useState } from 'react';

const Footer = () => {
  const [utmGlobalAtom, _] = useUtmGlobalAtom();
  const [authGlobalAtom, setAuthGlobalAtom] = useAuthGlobalAtom();
  const randomId = authGlobalAtom.randomId;
  const isRandomIdUpdate = !randomId || randomId === '';
  const newRandomId = makeRandomId();
  if (isRandomIdUpdate) {
    setAuthGlobalAtom({ randomId: newRandomId });
  }

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [btnText, setBtnText] = useState('제출하기');

  // Google Sheets에 데이터를 추가하는 함수
  const handleAddToSheet = async (e: React.FormEvent) => {
    e.preventDefault(); // 폼의 기본 제출 동작을 막음
    console.log('randomId', randomId);
    LogCollection.createClickLog({ randomId, ...utmGlobalAtom });

    if (name.length === 0) return setBtnText('이름을 입력해주세요');
    if (phone.length < 10) return setBtnText('올바른 전화번호를 알려주세요');

    try {
      const response = await fetch('/api/add-to-sheet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone, message, randomId, utmGlobalAtom }),
      });

      const result = await response.json();
      if (response.ok) {
        setName('');
        setPhone('');
        setMessage('');
        setBtnText('제출이 완료되었어요');
        setTimeout(() => {
          setBtnText('제출하기');
        }, 2000);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    if (name.length !== 0) setBtnText('제출하기');
    if (phone.length >= 10) setBtnText('제출하기');
  }, [name, phone, message]);

  return (
    <section id="footer">
      <div className="container">
        <header className="major">
          <h2>Get in touch</h2>
        </header>
        <form method="post" action="#" onSubmit={handleAddToSheet}>
          <div className="row gtr-uniform">
            <div className="col-6 col-12-xsmall">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="이름"
                value={name}
                onChange={e => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="col-6 col-12-xsmall">
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="전화번호"
                value={phone}
                onChange={e => {
                  setPhone(e.target.value);
                }}
              />
            </div>
            <div className="col-12">
              <textarea
                name="message"
                id="message"
                placeholder="한 번에 피팅하고 싶은 옷의 수 / 주문하려는 제품 플랫폼(무신사, 지그재그 등)을 알려주시면 순번대로 연락드릴게요"
                rows={4}
                value={message}
                onChange={e => {
                  setMessage(e.target.value);
                }}
              ></textarea>
            </div>
            <div className="col-12">
              <ul className="actions special">
                <li>
                  <input type="submit" value={btnText} className={`primary`} />
                </li>
              </ul>
            </div>
          </div>
        </form>
      </div>
      <footer>
        {/* <ul className="icons">
          <li>
            <Link href="#" className="icon brands alt fa-twitter">
              <span className="label">Twitter</span>
            </Link>
          </li>
        </ul>
        <ul className="copyright">
          <li>&copy; Untitled</li>
          <li>
            Design: <Link href="http://html5up.net">HTML5 UP</Link>
          </li>
          <li>
            Demo Images: <Link href="http://unsplash.com">Unsplash</Link>
          </li>
        </ul> */}
      </footer>
    </section>
  );
};

export default Footer;
