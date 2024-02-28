"use client";
import { RootState } from "@/src/shared/store/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addHelloList, deleteHelloList } from "@/src/shared/store/slice/example-slice";
interface pageProps {}

const Page = ({}: pageProps) => {
  const hello = useSelector((s: RootState) => s);
  const dispatch = useDispatch();
  console.log(hello.example);

  return (
    <div>
      {hello.example.helloList.map((item) => (
        <div key={item.id} className="">
          {item.content}
          <button
            onClick={() => {
              dispatch(deleteHelloList(item));
            }}
          >
            헬로 삭제
          </button>
        </div>
      ))}
      <button
        onClick={() => {
          dispatch(
            addHelloList({
              id: Math.random().toString(),
              content: "안녕하세용",
              createdAt: new Date().toISOString(),
              isOpen: false,
            }),
          );
        }}
      >
        헬로 추가
      </button>
    </div>
  );
};

export default Page;
