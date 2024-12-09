import React from 'react';
import type { ProductType } from './form';
import styles from './form-result.module.css';

type Props = {
  goNext: () => void;
  productList: ProductType[];
};
const FormResult = ({ goNext, productList }: Props) => {
  const handleClick = () => {
    goNext();
  };
  return (
    <div className="container">
      <header className="major">
        <h2>배송 결과 조회</h2>
      </header>
      <div className={styles.box2}>
        {productList.map((product, index) => (
          <div key={product.name} className={styles.box3}>
            <div className={styles.text3}>{product.platform}</div>
            <div className={styles.text4}>{product.name}</div>
            <div className={styles.text5}>{Math.random() > 0.5 ? '배송 완료' : '배송 중'}</div>
          </div>
        ))}
      </div>
      <button type="button" className="primary" onClick={handleClick}>
        방문 예약하기
      </button>
    </div>
  );
};

export default FormResult;
