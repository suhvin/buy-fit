import React, { useState } from 'react';
import type { ProductType } from './form';
import styles from './form-product.module.css';

type Props = {
  goNext: () => void;
  productList: ProductType[];
  setProductList: (value: ProductType[]) => void;
};
const FormProduct = ({ goNext, productList, setProductList }: Props) => {
  const [platform, setPlatform] = useState('');
  const [name, setName] = useState('');

  const handleAdd = () => {
    if (platform === '' || name === '') return;
    setProductList([...productList, { platform, name }]);
  };

  const handleClick = () => {
    goNext();
  };

  return (
    <div className="container">
      <header className="major">
        <h2>배송 리스트</h2>
      </header>
      <div className={styles.box1}>
        <input
          className={styles.text1}
          value={platform}
          onChange={e => setPlatform(e.target.value)}
          placeholder="플랫폼"
        />
        <input className={styles.text2} value={name} onChange={e => setName(e.target.value)} placeholder="상품명" />
        <button className={'secondary'} type="button" onClick={handleAdd}>
          추가
        </button>
      </div>
      <div className={styles.box2}>
        {productList.map((product, index) => (
          <div key={product.name} className={styles.box3}>
            <div className={styles.text3}>{product.platform}</div>
            <div className={styles.text4}>{product.name}</div>
          </div>
        ))}
      </div>
      <button type="button" className="primary" onClick={handleClick}>
        배송 시작
      </button>
    </div>
  );
};

export default FormProduct;
