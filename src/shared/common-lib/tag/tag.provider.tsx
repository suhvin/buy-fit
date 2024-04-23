"use client";
import { updateTagState } from "@/src/shared/store/slice/tag-slice";
import { RootState } from "@/src/shared/store/store";
import { useRouter, useSearchParams } from "next/navigation";
import { PropsWithChildren, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const TagProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const state = useSelector((s: RootState) => s);
  const dispatch = useDispatch();

  const searchParams = useSearchParams();

  const utm_source = searchParams.get("utm_source");
  const utm_medium = searchParams.get("utm_medium");
  const utm_campaign = searchParams.get("utm_campaign");
  const utm_content = searchParams.get("utm_content");
  const utm_term = searchParams.get("utm_term");

  const isCampaign = utm_source || utm_medium || utm_campaign || utm_content || utm_term;

  useEffect(() => {
    if (isCampaign) {
      dispatch(
        updateTagState({
          utm_source: utm_source ?? "",
          utm_medium: utm_medium ?? "",
          utm_campaign: utm_campaign ?? "",
          utm_content: utm_content ?? "",
          utm_term: utm_term ?? "",
        }),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCampaign]);

  // const randomId = state.info.randomId;
  useEffect(() => {
    // const isRandomIdUpdate = randomId === "";
    // const newRandomId = makeRandomId();
    // if (isRandomIdUpdate) {
    //   dispatch(
    //     updateInfoState({
    //       randomId: newRandomId,
    //     }),
    //   );
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <>{children}</>;
};

export function makeRandomId() {
  const now = new Date();
  const year = now.getFullYear(); // 년도
  const month = now.getMonth() + 1; // 월
  const date = now.getDate(); // 날짜
  const day = now.getDay(); // 요일
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  const random = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;

  return (
    addZero(year).slice(2, 4) +
    addZero(month) +
    addZero(date) +
    addZero(hour) +
    addZero(minute) +
    addZero(second) +
    random
  );
}

function addZero(num: number) {
  let numZero = String(num);
  if (Number(numZero) < 10) {
    numZero = "0" + numZero;
  }
  return numZero;
}
