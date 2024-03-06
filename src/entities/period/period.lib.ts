export function isDifferenceGreaterThanSeconds(date1: string, date2: string, seconds: number): boolean {
  // ISO 형식의 문자열을 Date 객체로 파싱합니다.
  const dateObj1 = new Date(date1);
  const dateObj2 = new Date(date2);

  // 두 날짜의 차이를 밀리초로 계산합니다.
  const differenceInMilliseconds = Math.abs(dateObj1.getTime() - dateObj2.getTime());

  // 밀리초를 초로 변환합니다.
  const differenceInSeconds = differenceInMilliseconds / 1000;

  // 계산된 시간 차이가 주어진 초보다 큰지 비교합니다.
  return differenceInSeconds > seconds;
}
