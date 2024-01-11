# quokka plate

git clone을 통해 사용할 수도 있지만 degit이라는 더욱 편리한 솔루션이 있습니다.

```
npm i -g degit // 이미 degit을 설치한 경우 생략

npx degit quokka-crew/quokka-plate
```

두 명령어만 입력하면 끝입니다.

# 프로젝트 환경

## stack

1. next.js app router

2. tailwindcss

3. react-hook-form , zod

4. zustand

5. date-fns / @toss

6. tanstackquery

7. jest, RTL

# clean architecture

클린아키텍처 이론에 입각하여 약간의 변형이 있습니다.

의존성 방향은 위에서 아래로 흘러야합니다.

| driver
| controller
| use-case
| domain
| shared

## driver

가장 변경되기 쉬운 외부 요소들이 들어갑니다.

우리의 리액트 컴포넌트 , ui 관련 훅 , 외부 라이브러리, 데이터베이스등은 모두 driver입니다.

데이터베이스 -> db

외부 라이브러리 코드 -> lib

리액트 컴포넌트 및 스타일링 논리 -> ui

## controller

컨트롤러 계층에서는 외부 인터페이스 (db, ui ) 등에서 들어오는 데이터를 유즈케이스와 엔티티가 처리하기 편한 방식으로 변환하는 작업을 수행합니다.

따라서 이 계층은 외부의 "날것" 데이터를 우리의 내부 핵심 업무규칙이 이해할 수 있는 형태로 변환하여 핵심규칙에 연결시키는 "어댑터" 역할을 합니다.

## use-case

애플리케이션에 특화된 업무 규칙을 포함합니다. 이 계층에서는 외부에서 들어온 어댑터를 이용하여 핵심규칙과 어댑터 사이의 완충지대 역할을 수행합니다.

internal은 입력 포트를 표현하며 external은 출력 포트를 표현합니다.

## domain

도메인은 핵심 업무 규칙을 지니고있습니다.

또한 도메인에서는 각 엔티티의 데이터 유형뿐만 아니라

데이터를 생성하기위한 팩토리함수, 클래스 그리고 데이터에 대한 변환 함수를 포함합니다.

## shared

공유 커널은 의존성의 최하단에 존재합니다. 이 부분에서는 도메인도 의존가능한 언어 기본규칙만을 사용하는 유틸함수들이 존재할 수 있습니다.
