<template>
  <div class="container mt-5" v-if="post">
    <h2 class="mb-3">{{ post.title }}</h2>
    <img v-if="post.image" :src="post.image" class="img-fluid mb-3" />
    <p><strong>작성일:</strong> {{ post.date }}</p>
    <p class="lead">{{ post.summary }}</p>
    <div>
      <RouterLink :to="`/post/${post.type}/${post.id}`" class="btn btn-primary mt-2">
        본문 보기
      </RouterLink>
    </div>
  </div>
  <div v-else class="container mt-5">
    <i>현재 게시된 글이 없거나 찾을 수 없어요...</i>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = ref()
const post = ref(null)

const loadPosts = async function() {
  id.value = route.params.id;
  const res = await fetch('/posts/index.json')
  const posts = await res.json()
  post.value = posts.find(p => p.id === id && p.type === 'portfolio')
}

onMounted(() => {
  loadPosts();
})

watch(() => route.params.id, (newId) => {
  // type.value = newType;
  // console.log(type.value);
  loadPosts();
  // title.value = categoryTitle();
  // emit('route-changed', title.value);
  // console.log(title.value);
});
</script>
