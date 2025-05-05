<template>
    <div class="container mt-5">
      <h2 class="mb-4">🌐 {{ categoryTitle }}</h2>
  
      <ul class="list-group">
        <li class="list-group-item" v-for="post in filteredPosts" :key="post.id">
          <h5>{{ post.title }}</h5>
          <p>{{ post.summary }}</p>
          <small class="text-muted">{{ post.date }}</small>
        </li>
      </ul>
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
      type: 'vue-express',
      title: 'Express 서버 시작하기',
      summary: 'Node.js로 백엔드 API 서버를 구축하는 방법',
      date: '2025-05-01'
    },
    {
      id: 2,
      type: 'frontend',
      title: 'Vite 기반 Vue3 프로젝트 세팅',
      summary: '빠른 개발환경을 위한 Vite 사용법',
      date: '2025-05-02'
    }
  ]
  
  const filteredPosts = computed(() =>
    allPosts.filter(post => post.type === type)
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
  