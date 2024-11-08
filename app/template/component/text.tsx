import React from 'react';

interface TextProps extends React.ComponentPropsWithoutRef<'p'> {}

const Text = ({ children, className, ...attributes }: TextProps, ref: React.Ref<HTMLParagraphElement>) => {
  return (
    <p {...attributes} className={` w-[100px] h-[30px] text-14 text-neutral100 ${className}`} ref={ref}>
      {children}
    </p>
  );
};

export default React.forwardRef(Text);
