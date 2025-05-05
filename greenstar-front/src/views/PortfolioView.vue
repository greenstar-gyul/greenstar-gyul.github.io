<template>
    <div class="container mt-5" v-if="portfolio">
      <h2 class="mb-3">{{ portfolio.title }}</h2>
      <img v-if="portfolio.image" :src="portfolio.image" class="img-fluid mb-3" alt="포트폴리오 이미지" />
      <p><strong>작성일:</strong> {{ portfolio.date }}</p>
      <p class="lead">{{ portfolio.description }}</p>
  
      <div v-if="portfolio.tags && portfolio.tags.length">
        <span v-for="tag in portfolio.tags" :key="tag" class="badge bg-secondary me-1">
          #{{ tag }}
        </span>
      </div>
    </div>
  
    <div v-else class="container mt-5">
      <p>해당 포트폴리오가 존재하지 않습니다.</p>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router'
  import { computed } from 'vue'
  
  const route = useRoute()
  const id = route.params.id
  
  const allPortfolios = [
    {
      id: '1',
      title: 'Vue 기반 쇼핑몰 프로젝트',
      date: '2025-05-01',
      description: 'Vue 3 + Express를 사용한 간단한 쇼핑몰 프로젝트입니다.',
      image: 'https://via.placeholder.com/800x400?text=포트폴리오+1',
      tags: ['Vue', 'Express', 'MySQL']
    },
    {
      id: '2',
      title: '게임 구매 사이트 Gemdori',
      date: '2025-05-02',
      description: 'MyBatis 기반 게임 사이트 제작 및 리뷰 시스템 구현.',
      image: 'https://via.placeholder.com/800x400?text=포트폴리오+2',
      tags: ['Java', 'Spring', 'MyBatis']
    }
  ]
  
  const portfolio = computed(() =>
    allPortfolios.find(p => p.id === id)
  )
  </script>
  