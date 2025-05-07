<template>
  <div class="container mt-5">
    <h2 class="mb-4">📘 {{ categoryTitle }}</h2>

    <div class="row">
      <div
        class="col-md-4 mb-4"
        v-for="post in filteredPosts"
        :key="post.id"
      >
        <div class="card h-100">
          <img
            v-if="post.image"
            :src="post.image"
            class="card-img-top"
            alt="thumbnail"
          />
          <div class="card-body">
            <RouterLink :to="`/post/${post.id}`" class="text-decoration-none">
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
    'data-structure': '자료구조',
    'algorithm': '알고리즘'
  }
  return map[type] || 'Algorithm'
})
</script>
