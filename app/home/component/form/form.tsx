'use client';

import { useState } from 'react';
import FormLoc from './form-loc';
import FormProduct from './form-product';
import FormResult from './form-result';
import FormCal from './form-cal';

export type ProductType = {
  platform: string;
  name: string;
};

const Form = () => {
  const [step, setStep] = useState('loc');
  const [productList, setProductList] = useState<ProductType[]>([]);

  return (
    <section id="footer">
      {step === 'loc' ? (
        <FormLoc goNext={() => setStep('product')} />
      ) : step === 'product' ? (
        <FormProduct goNext={() => setStep('result')} productList={productList} setProductList={setProductList} />
      ) : step === 'result' ? (
        <FormResult goNext={() => setStep('cal')} productList={productList} />
      ) : step === 'cal' ? (
        <FormCal />
      ) : (
        <></>
      )}
    </section>
  );
};

export default Form;
