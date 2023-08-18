# 새신자 관리 시스템

## :: 기술

- Typescript

- Sass & CSS Module

<br />

## :: Project Structure

```
.
│
├── src : 실질적은 프론트엔드 관련 코드는 모두 src 폴더에 포함
│   │
│   ├── Components : 전역으로 사용할 수 있는 컴포넌트
│   │   ├── DatePick : Calendar에 사용되는 날짜 지정 컴포넌트
│   │   ├── GNB : 공용 Global Navigation Bar 컴포넌트
│   │   ├── Modal : 공용 Modal 컴포넌트
│   │
│   ├── Pages : 페이지 컴포넌트
│   │   ├── Add : 새 신자 등록 및 수정 관련 컴포넌트
│   │   ├── Detail : 새 신자 정보를 볼 수 있는 컴포넌트
│   │   ├── Login : 로그인 관련 UI 및 로직이 담겨있는 컴포넌트
│   │   ├── Main : 새 신자 정보를 한 눈에 볼 수 있는 대시보드 컴포넌트
│   │   └── Table : 전체 신자 정보를 팀으로 볼 수 있는 컴포넌트
│   │
│   ├── Router : 라우팅 관리
│   │   ├── Router : 실제 라우팅 처리를 하는 컴포넌트
│   │   ├── RouterInfo : 라우팅할 컴포넌트의 정보를 담고있는 컴포넌트
│   │
│   ├── styles : 공통 스타일 속성 관리
│   │   ├── common.scss : body, container 등 여러 페이지에서 공통으로 사용되는 스타일 관리
│   │   ├── markdown.scss : 마크다운 형식 관련 스타일 관리
│   │   ├── mediaQuery.scss : 미디어 쿼리 breakpoint 관련 스타일 관리
│   │   ├── reset.scss : 리셋 관련 스타일 관리
│   │
│   └── utils : 전역에서 사용 할 수 있는 의존성이 없는 단순한 기능의 함수들을 모아놓은 폴더
│       ├── hooks
│       ├── styles : css style, className과 관련된 함수 모음
├── .env

```

## :: 실제 사이트

[새로운 참청년, 새참] (https://saecharm.store)
