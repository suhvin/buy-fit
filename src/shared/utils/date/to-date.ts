import { parseISO } from 'date-fns';

export const toDate = (date: string | Date) => {
  if (typeof date === 'string') return parseISO(date);
  return date;
};
