// env에 형식에 맞는 환경변수 생성
export const ENV = {
  gaId: process.env.GA_ID ?? "",
  gtmId: process.env.GTM_ID ?? "",
} as const;
