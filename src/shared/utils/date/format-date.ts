import { format, parseISO } from 'date-fns';

type DateFormatVariant = 'yyyy.MM.dd' | 'yyyy.MM.dd - hh:mm' | 'M월 dd일' | 'MM월 dd일';

export const formatDate = (date: string, dateFormat: DateFormatVariant = 'yyyy.MM.dd') => {
  return format(parseISO(date), dateFormat);
};
