<template>
  <div class="container mt-5">
    <h2 class="mb-4">🌐 {{ categoryTitle }}</h2>

    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="post in filteredPosts"
        :key="post.id"
      >
        <RouterLink :to="`/post/${post.type}/${post.id}`" class="text-decoration-none">
          <h5>{{ post.title }}</h5>
        </RouterLink>
        <p>{{ post.summary }}</p>
        <small class="text-muted">{{ post.date }}</small>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const type = route.params.type
const allPosts = ref([])

onMounted(async () => {
  const res = await fetch('/posts/index.json')
  allPosts.value = await res.json()
})

const filteredPosts = computed(() =>
  allPosts.value.filter(post => post.type === type)
)

const categoryTitle = computed(() => {
  const map = {
    'vue-express': 'Vue + Express',
    'frontend': 'Frontend',
    'backend': 'Backend'
  }
  return map[type] || 'Web Dev'
})
</script>
