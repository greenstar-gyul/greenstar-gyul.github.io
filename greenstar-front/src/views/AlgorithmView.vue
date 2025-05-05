<template>
    <div class="container mt-5">
      <h2 class="mb-4">📘 {{ categoryTitle }}</h2>
  
      <div class="row">
        <div class="col-md-4 mb-4" v-for="post in filteredPosts" :key="post.id">
          <div class="card h-100">
            <img v-if="post.image" :src="post.image" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{{ post.title }}</h5>
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
  import { useRoute } from 'vue-router'
  import { computed } from 'vue'
  
  const route = useRoute()
  const type = route.params.type
  
  const allPosts = [
    {
      id: 1,
      type: 'data-structure',
      title: '스택과 큐',
      summary: '선입선출과 후입선출의 자료구조 비교',
      date: '2025-05-01',
      image: 'https://via.placeholder.com/400x200?text=스택+큐'
    },
    {
      id: 2,
      type: 'algorithm',
      title: 'DFS와 BFS',
      summary: '그래프 탐색 알고리즘의 핵심 비교',
      date: '2025-05-02',
      image: 'https://via.placeholder.com/400x200?text=DFS+BFS'
    }
  ]
  
  const filteredPosts = computed(() =>
    allPosts.filter(post => post.type === type)
  )
  
  const categoryTitle = computed(() => {
    const map = {
      'data-structure': '자료구조',
      'algorithm': '알고리즘'
    }
    return map[type] || '알고리즘'
  })
  </script>
  