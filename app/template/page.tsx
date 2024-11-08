import React from 'react';
import { TemplateProvider } from './context';
import { TextContainer } from './component/text.container';
import { InputContainer } from './component/input.container';

const TemplatePage = () => {
  return (
    <TemplateProvider>
      <div className=" flex flex-col">
        <TextContainer />
        <InputContainer />
      </div>
    </TemplateProvider>
  );
};

export default TemplatePage;
