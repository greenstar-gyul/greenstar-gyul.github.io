<script setup>
const posts = [
  {
    id: 1,
    title: "Vue 블로그 만들기 1단계",
    date: "2025-05-05",
    summary: "Vue와 Node.js로 만든 개인 블로그 프로젝트 시작!",
  },
  {
    id: 2,
    title: "GitHub Pages에 자동 배포하기",
    date: "2025-05-04",
    summary: "GitHub Actions를 이용해 자동 푸시 & 배포하는 방법.",
  },
];
</script>
<template>
  <div class="container mt-5">
    <h2 class="mb-4">📚 최신 글</h2>

    <div class="row">
      <div
        class="col-md-6 col-lg-4 mb-4"
        v-for="post in posts"
        :key="post.id"
      >
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text text-muted">{{ post.date }}</p>
            <p class="card-text">{{ post.summary }}</p>
            <RouterLink
              class="btn btn-primary btn-sm mt-2"
              :to="`/post/${post.id}`"
            >
              자세히 보기
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
