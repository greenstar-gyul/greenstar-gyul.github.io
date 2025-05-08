---
title: GitHub Pages 배포 설정
date: 2025-05-06
category: Web Dev
---

Vite 기반 Vue 프로젝트를 GitHub Pages에 배포하기 위해 다음과 같은 과정을 진행했습니다.

## 1. vite.config.js 수정

GitHub Pages에서 정적 파일을 찾을 수 있도록 `vite.config.js`에 `base` 경로를 설정합니다.

사용자 페이지(`username.github.io` 형식)일 경우:

```js
export default defineConfig({
  base: '/',
  plugins: [vue()]
})
```

프로젝트 페이지(username.github.io/repo-name)일 경우:

```js
export default defineConfig({
  base: '/repo-name/',
  plugins: [vue()]
})
```

## 2. gh-pages 패키지 설치

```bash
npm install --save-dev gh-pages
```

## 3. 배포 스크립트 추가
package.json에 다음 스크립트를 추가합니다:

```json
"scripts": {
  "build": "vite build",
  "deploy": "npm run build && gh-pages -d dist"
}
```

## 4. 첫 배포

```bash
npm run deploy
```
이 명령은 다음을 자동으로 수행합니다:
* npm run build로 dist/ 폴더 생성
* gh-pages -d dist로 gh-pages 브랜치에 정적 파일 업로드

5. GitHub 설정
GitHub 저장소 > Settings > Pages에서
Branch: gh-pages, **Folder: / (root)**로 설정합니다.

요약
이 설정을 통해 main 브랜치에는 소스 코드를 유지하고,
gh-pages 브랜치에는 빌드된 정적 파일만 배포할 수 있게 됩니다.

---