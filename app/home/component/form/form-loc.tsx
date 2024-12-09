import React from 'react';
import styles from './form-loc.module.css';

type Props = {
  goNext: () => void;
};

const FormLoc = ({ goNext }: Props) => {
  const locText = '서울특별시 서대문구 연세로 50 연세대학교 경영관 2층 209호';
  const handleCopy = () => {
    navigator.clipboard
      .writeText(locText)
      .then(() => {
        alert('주소가 복사되었습니다!');
      })
      .catch(error => {
        console.error('텍스트 복사 실패: ', error);
        alert('복사에 실패했습니다.');
      });
  };

  const handleClick = () => {
    handleCopy();
    goNext();
  };
  return (
    <div className="container">
      <header className="major">
        <h2>바이핏 피팅룸 주소</h2>
      </header>
      <div className={styles.box}>
        <p className={styles.text}>{locText}</p>
      </div>
      <button type="button" className="primary" onClick={handleClick}>
        주소 복사하고 바이핏 시작하기
      </button>
    </div>
  );
};

export default FormLoc;
