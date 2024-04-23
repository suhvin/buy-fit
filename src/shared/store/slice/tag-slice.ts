import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TagType = {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
};
const initialState: TagType = {
  utm_source: "",
  utm_medium: "",
  utm_campaign: "",
  utm_content: "",
  utm_term: "",
};

export const tagSlice = createSlice({
  name: "tagSlice",
  initialState: initialState,
  reducers: {
    updateTagState: (state, action: PayloadAction<Partial<TagType>>) => {
      const list = Object.entries(action.payload);
      list.forEach(([key, value]) => {
        //@ts-ignore
        state[key] = value;
      });
    },
  },
});

export const { updateTagState } = tagSlice.actions;
// 이게 action 함수 역할을 합니다.
