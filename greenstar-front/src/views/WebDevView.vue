<template>
  <div class="container mt-5">
    <h2 class="mb-4">🌐 {{ title }}</h2>

    <div v-if="allPosts.length > 0">
      <ul class="list-group">
        <li class="list-group-item" v-for="post in allPosts" :key="post.id">
          <RouterLink :to="`/post/${post.type}/${post.id}`" class="text-decoration-none">
            <h5>{{ post.title }}</h5>
          </RouterLink>
          <p>{{ post.summary }}</p>
          <small class="text-muted">{{ post.date }}</small>
        </li>
      </ul>
    </div>
    <div v-else>
      <i>현재 게시된 글이 없거나 찾을 수 없어요...</i>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute();
const type = ref('');
const allPosts = ref([]);
const title = ref('');
const emit = defineEmits(['route-changed']);

onMounted(function () {
  type.value = route.params.type;
  loadAllPosts();
  title.value = categoryTitle();
  emit('route-changed', title.value);
});

const loadAllPosts = async function () {
  const res = await fetch('/posts/index.json');
  allPosts.value = await res.json();
  filteredPosts();
}

const filteredPosts = function () {
  allPosts.value = allPosts.value.filter(post => post.type === type.value);
}

const categoryTitle = function () {
  const map = {
    'vue-express': 'Vue + Express',
    'frontend': 'Frontend',
    'backend': 'Backend'
  };
  return map[type.value] || 'Web Dev';
}

watch(() => route.params.type, (newType) => {
  type.value = newType;
  loadAllPosts();
  title.value = categoryTitle();
  emit('route-changed', title.value);
});
</script>
