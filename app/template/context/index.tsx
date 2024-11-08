'use client';
import React, { useContext } from 'react';
import { createContext } from 'react';

type TemplateState = {
  text: string;
};

type TemplateDispatch = {
  setTemplate: React.Dispatch<React.SetStateAction<TemplateState>>;
};

const TemplateContext = createContext<null | TemplateState>(null);
const TemplateDispatchContext = createContext<null | TemplateDispatch>(null);

export const TemplateProvider = ({ children }: React.PropsWithChildren) => {
  const [template, setTemplate] = React.useState<TemplateState>({
    text: 'test',
  });

  return (
    <TemplateContext.Provider value={template}>
      <TemplateDispatchContext.Provider
        value={{
          setTemplate,
        }}
      >
        {children}
      </TemplateDispatchContext.Provider>
    </TemplateContext.Provider>
  );
};

export const useTemplateHook = () => {
  const value = useContext(TemplateContext);
  if (value === null) throw new Error('컨텍스트가 없음');
  return value;
};
export const useTemplateDispatchHook = () => {
  const value = useContext(TemplateDispatchContext);
  if (value === null) throw new Error('디스패치 컨텍스트가 없음');
  return value;
};

// const GaramConsumer = () => {
//   const garam = useGaramHook();
//   return (
//     <div className="">
//       <div className="">{garam.age}</div>
//       <div className="">{garam.name}</div>
//       <div className="">{garam.univ}</div>
//     </div>
//   );
// };

// const GaramTrans = () => {
//   const garamDispatch = useGaramDispatchHook();
//   return (
//     <button
//       onClick={() => {
//         garamDispatch.setGaram((state) => ({
//           ...state,
//           age: state.age + 1,
//         }));
//       }}
//     >
//       가람님 나이를 한살 더 먹게하기
//     </button>
//   );
// };
