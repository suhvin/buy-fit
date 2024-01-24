environment 설정 중 실수하기 쉬운 부분들이 많습니다.
여기에서 타입스크립트 형태로 정의하면 편하게 가져올수있어요

예시

```tsx
export const ENV = {
  environment: proccess.env.NODE_ENV,
  baseUrl: proccess.env.NEXT_PUBLIC_URL,
};
```

클라이언트에서도 사용해야하는 환경변수는 NEXT_PUBLIC 접두사를 붙이는것을 통해 사용할 수 있습니다.
