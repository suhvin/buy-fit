// env에 형식에 맞는 환경변수 생성
export const ENV_GOOGLE = {
  gaId: process.env.GA_ID ?? "",
  gtmId: process.env.GTM_ID ?? "",
} as const;

export const ENV_FIREBASE = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};
