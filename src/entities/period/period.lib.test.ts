import { isDifferenceGreaterThanSeconds } from "./period.lib";

describe("", () => {
  it("", () => {
    const date1 = "2024-03-06T15:00:00Z"; // ISO 형식 날짜 예시
    const date2 = "2024-03-06T15:01:00Z"; // ISO 형식 날짜 예시
    const seconds = 59;
    const result = isDifferenceGreaterThanSeconds(date1, date2, seconds);
    expect(result).toBe(true);
  });
  it("", () => {
    const date1 = "2024-03-06T15:00:00Z"; // ISO 형식 날짜 예시
    const date2 = "2024-03-06T15:01:00Z"; // ISO 형식 날짜 예시
    const seconds = 61;
    const result = isDifferenceGreaterThanSeconds(date1, date2, seconds);
    expect(result).toBe(false);
  });
});
