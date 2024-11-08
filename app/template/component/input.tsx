import React from 'react';

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {}

const Input = ({ ...attributes }: InputProps, ref: React.Ref<HTMLInputElement>) => {
  return <input {...attributes} className=" w-[200px] h-[40px] bg-black text-white" ref={ref} />;
};

export default React.forwardRef(Input);
