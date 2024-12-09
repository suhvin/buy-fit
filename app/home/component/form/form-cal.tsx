'use client';
import { makeRandomId } from '@/src/app/provider/page-logger-provider';
import { LogCollection } from '@/src/shared/firebase/collection/log';
import { useAuthGlobalAtom } from '@/src/shared/store/auth.store';
import { useUtmGlobalAtom } from '@/src/shared/store/utm.store';
import { useEffect, useState } from 'react';
import styles from './form-cal.module.css';

const FormCal = () => {
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
  }, [name, phone]);

  const [text, setText] = useState('날짜를 선택해주세요');

  const handleDateClick = (text: string) => {
    setText(text);
  };

  const handleClick = () => {
    window.location.reload();
  };

  return (
    <div className="container">
      <header className="major">
        <h2>날짜 선택</h2>
      </header>
      <div className={styles.box2}>
        <button type="button" className="secondary" onClick={() => handleDateClick('12/10 : 옷 3벌이 배송이 중이에요')}>
          12/10
        </button>
        <button type="button" className="secondary" onClick={() => handleDateClick('12/11 : 옷 3벌이 배송이 중이에요')}>
          12/11
        </button>
        <button
          type="button"
          className="secondary"
          onClick={() => handleDateClick('12/12 : 옷 1벌 배송 완료 2벌이 배송 중이에요')}
        >
          12/12
        </button>
        <button
          type="button"
          className="secondary"
          onClick={() => handleDateClick('12/13 : 옷 2벌 배송 완료 1벌이 배송 중이에요')}
        >
          12/13
        </button>
        <button
          type="button"
          className="secondary"
          onClick={() => handleDateClick('12/14 : 모든 옷을 입어볼 수 있어요')}
        >
          12/14
        </button>
        <button
          type="button"
          className="secondary"
          onClick={() => handleDateClick('12/15 : 다른 분이 예약한 날짜에요')}
        >
          12/15
        </button>
        <button
          type="button"
          className="secondary"
          onClick={() => handleDateClick('12/16 : 다른 분이 예약한 날짜에요')}
        >
          12/16
        </button>
        <button
          type="button"
          className="secondary"
          onClick={() => handleDateClick('12/17 : 모든 옷을 입어볼 수 있어요')}
        >
          12/17
        </button>
        <button
          type="button"
          className="secondary"
          onClick={() => handleDateClick('12/18 : 모든 옷을 입어볼 수 있어요')}
        >
          12/18
        </button>
        <button
          type="button"
          className="secondary"
          onClick={() => handleDateClick('12/19 : 1벌의 반품 가능 기간이 지나요')}
        >
          12/19
        </button>
        <button
          type="button"
          className="secondary"
          onClick={() => handleDateClick('12/20 : 2벌의 반품 가능 기간이 지나요')}
        >
          12/20
        </button>
        <button
          type="button"
          className="secondary"
          onClick={() => handleDateClick('12/21 : 2벌의 반품 가능 기간이 지나요')}
        >
          12/21
        </button>
        <button
          type="button"
          className="secondary"
          onClick={() => handleDateClick('12/22 : 모든 옷의 반품 가능 기간이 지나요')}
        >
          12/22
        </button>
        <button
          type="button"
          className="secondary"
          onClick={() => handleDateClick('12/23 : 모든 옷의 반품 가능 기간이 지나요')}
        >
          12/23
        </button>
        <button
          type="button"
          className="secondary"
          onClick={() => handleDateClick('12/24 : 모든 옷의 반품 가능 기간이 지나요')}
        >
          12/24
        </button>
      </div>
      <p className={styles.text1}>{text}</p>
      <button type="button" className="primary" onClick={handleClick}>
        예약확정
      </button>
    </div>
  );
};

export default FormCal;
