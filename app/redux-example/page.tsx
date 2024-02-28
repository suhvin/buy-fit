"use client";
import { RootState } from "@/src/shared/store/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addHelloList, deleteHelloList } from "@/src/shared/store/slice/example-slice";
// slice에서 export한 함수를 가져와서 사용합니다.

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
              //dispatch로 감싸고 보내면 됩니다.
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
