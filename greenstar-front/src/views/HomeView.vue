<script setup>
import { onMounted, ref } from 'vue';

const posts = ref('');
const loadAllPosts = async function() {
  const result = await fetch(`/posts/index.json`);
  posts.value = await result.json();
}
onMounted(() => {
  loadAllPosts();
})
</script>
<template>
  <div class="container mt-5">
    <h2 class="mb-4">📚 전체 글</h2>

    <div v-if="posts.length > 0" class="row">
      <div class="col-md-6 col-lg-4 mb-4" v-for="post in posts" :key="post.id">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text text-muted">{{ post.date }}</p>
            <p class="card-text">{{ post.summary }}</p>
            <RouterLink class="btn btn-primary btn-sm mt-2" :to="`/post/${post.type}/${post.id}`">
              자세히 보기
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <i>현재 게시된 글이 없거나 찾을 수 없어요...</i>
    </div>
  </div>
</template>
