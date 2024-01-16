'use client'
import React from "react";

import { addMonths } from "date-fns";
import {
  DayEnum,
  getCurrentMonthDate,
  getPrevDayCount,
  getPrevMonthDate,
  getNextDayCount,
  getNextMonthDate,
  flatTo2DArray,
} from "./calendar.util";

interface UseCalendarProps {
  startDay: keyof typeof DayEnum;
}

export const useCalendar = (injectDate: Date, option: UseCalendarProps = { startDay: "sunday" }) => {
  const { startDay } = option;
  const [date, dispatch] = React.useState(injectDate);

  const curDayList = getCurrentMonthDate(date);

  const prevDayCount = getPrevDayCount(date, startDay);
  const prevDayList = getPrevMonthDate(date, prevDayCount);

  const nextDayCount = getNextDayCount(curDayList.length, prevDayList.length);
  const nextDayList = getNextMonthDate(date, nextDayCount);

  const flatCalendarList = prevDayList.concat(curDayList, nextDayList);
  const calendar = flatTo2DArray(flatCalendarList);

  const goNextMonth = (jump = 1) => {
    return dispatch((prevDate) => addMonths(prevDate, jump));
  };

  const goPrevMonth = (jump = -1) => {
    return dispatch((prevDate) => addMonths(prevDate, jump));
  };

  return { calendar, date, dispatch, goNextMonth, goPrevMonth };
};
