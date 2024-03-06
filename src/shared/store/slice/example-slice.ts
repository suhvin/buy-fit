import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

type HelloType = {
  id: string;
  content: string;
  isOpen: boolean;
  createdAt: string;
};

type ExampleType = {
  helloList: HelloType[];
};
const initialState: ExampleType = {
  helloList: [],
};

export const exampleSlice = createSlice({
  name: "todoSlice",
  initialState: initialState,
  reducers: {
    addHelloList: (state, action: PayloadAction<HelloType>) => {
      state.helloList.push(action.payload);
      // toolkit은 immer가 내장되어있기때문에 원본 state에 직접 수정을 가해도 적용됩니다.
    },
    deleteHelloList: (state, action: PayloadAction<HelloType>) => {
      return {
        helloList: state.helloList.filter((hello) => hello.id !== action.payload.id),
      };
      // 평소 redux와 같은 방식으로 수정하고 싶다면 다음과 같이 새 상태를 반환시키면 됩니다.
    },
  },
});

export const { addHelloList, deleteHelloList } = exampleSlice.actions;
// 이게 action 함수 역할을 합니다.

export const useHello = () => {
  const dispatch = useDispatch();
  const addHello = (action: HelloType) => {
    dispatch(addHelloList(action));
  };
  const deleteHello = (action: HelloType) => {
    dispatch(deleteHelloList(action));
  };
  return { addHello, deleteHello };
};
