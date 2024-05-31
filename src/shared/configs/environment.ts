// env에 형식에 맞는 환경변수 생성
export const ENVIRONMENT_GOOGLE = {
  GA_ID: process.env.GA_ID ?? "",
  GTM_ID: process.env.GTM_ID ?? "",
} as const;

export const ENVIRONMENT_FIREBASE = {
  API_KEY: process.env.FIREBASE_API_KEY,
  AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMIN,
  PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
  STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUKET,
  MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
  APP_ID: process.env.FIREBASE_APP_ID,
  MEASUREMENT_ID: process.env.MEASUREMENT_ID,
};

export const ENVIRONMENT = {
  NODE_ENV: process.env.NODE_ENV,
};
