<template>
  <div class="container mt-5">
    <h2 class="mb-4">📘 {{ title }}</h2>

    <div class="row">
      <div v-if="allPosts.length > 0">
        <div class="col-md-4 mb-4" v-for="post in allPosts" :key="post.id">
          <div class="card h-100">
            <img v-if="post.image" :src="post.image" class="card-img-top" alt="thumbnail" />
            <div class="card-body">
              <RouterLink :to="`/post/${post.type}/${post.id}`" class="text-decoration-none">
                <h5 class="card-title">{{ post.title }}</h5>
              </RouterLink>
              <p class="card-text">{{ post.summary }}</p>
            </div>
            <div class="card-footer text-muted">
              {{ post.date }}
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <i>현재 게시된 글이 없거나 찾을 수 없어요...</i>
      </div>
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
  // console.log("필터링 타입: " + type.value);
  allPosts.value = allPosts.value.filter(post => post.type === type.value);
}

const categoryTitle = function () {
  const map = {
    'data-structure': '자료구조',
    'algorithm': '알고리즘'
  };
  return map[type.value] || 'Algorithm';
}

watch(() => route.params.type, (newType) => {
  type.value = newType;
  // console.log(type.value);
  loadAllPosts();
  title.value = categoryTitle();
  emit('route-changed', title.value);
  // console.log(title.value);
});
</script>
