import { differenceInCalendarDays, parseISO } from "date-fns";

class TimeConverter {
  constructor() {}
  dateDiffrence(date1: Date | string, date2: Date | string) {
    const parsedDate1 = date1 instanceof Date ? date1 : parseISO(date1);
    const parsedDate2 = date2 instanceof Date ? date2 : parseISO(date2);
    return Math.abs(differenceInCalendarDays(parsedDate1, parsedDate2));
  }
}

export const timeConverter = new TimeConverter();
