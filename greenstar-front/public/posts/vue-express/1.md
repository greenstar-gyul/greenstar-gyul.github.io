---

title: Vue + Vite 프로젝트 초기 세팅
date: 2025-05-06
category: Web Dev

---

Vue 3 기반 블로그 프로젝트를 생성하기 위해 아래 명령어를 실행했습니다:

```bash
npm create vue@3
```

프로젝트 이름은 `greenstar-front`로 지정했으며, 기본 템플릿을 적용해 초기 구성을 완료했습니다.

## 기본 구성 옵션

- TypeScript: No
- JSX Support: No
- Vue Router: Yes
- Pinia: No
- Testing: No
- ESLint: Yes
- Prettier: Yes

## 추가 작업

- Bootstrap CSS를 추가하여 기본 스타일을 설정했습니다.
- main.js에서 `main.css`는 주석 처리하고 Bootstrap만 사용합니다.
- 페이지 레이아웃 구성은 다음과 같습니다:

Header (상단 고정)
│
├─ Sidebar (왼쪽, 햄버거 버튼으로 토글)
│
└─ MainContent (RouterView로 렌더링)

## 라우터 구조

- `/algorithm/:type` → 알고리즘 글 목록
- `/web-dev/:type` → 웹 개발 관련 글 목록
- `/portfolio/:id` → 포트폴리오 상세

## 요약

Vue + Vite 기반 개발 환경을 설정하고,  
프로젝트 구조와 초기 디자인, 라우터 구성까지 완료했습니다.
이제 글 데이터 구조(JSON + Markdown) 설계 및 렌더링 기능 구현으로 넘어갑니다.
