export const toIso = (date: string | Date) => {
  if (typeof date === 'string') return date;
  return date.toISOString();
};
