import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type HelloType = {
  id: string;
  content: string;
  isOpen: boolean;
  createdAt: string;
};

type ExampleType = {
  helloList: HelloType[];
  name: string;
  age: number;
};
const initialState: ExampleType = {
  helloList: [],
  name: "kevin",
  age: 20,
};

export const exampleSlice = createSlice({
  name: "todoSlice",
  initialState: initialState,
  reducers: {
    updateExampleState: (state, action: PayloadAction<Partial<ExampleType>>) => {
      const list = Object.entries(action.payload);
      list.forEach(([key, value]) => {
        //@ts-ignore
        state[key] = value;
      });
    },
  },
});

export const { updateExampleState } = exampleSlice.actions;
// 이게 action 함수 역할을 합니다.
