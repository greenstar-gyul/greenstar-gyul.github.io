<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import Sidebar from './components/Sidebar.vue';
import Header from './components/Header.vue'
import Footer from './components/Footer.vue';

const showSidebar = ref(false);
const currentPage = ref('홈');

const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value;
};

const updatePageTitle = (title) => {
  currentPage.value = title;
};
</script>

<template>
  <div class="main-layout d-flex flex-column min-vh-100">
    <Header :currentPage="currentPage" @toggle-sidebar="toggleSidebar" />

    <Transition name="slide">
      <Sidebar v-if="showSidebar" />
    </Transition>

    <main class="main-content flex-grow-1">
      <RouterView @route-changed="updatePageTitle" />
    </main>

    <Footer />
  </div>
</template>

<style>
body {
  margin: 0;
}

/* 전체 레이아웃 컨테이너 */
.main-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* 메인 콘텐츠 영역 */
.main-content {
  padding-top: 60px; /* header height */
  padding-left: 0;
  transition: padding-left 0.3s;
}

/* 데스크탑 사이드바 대응 */
@media (min-width: 768px) {
  /* .main-content {
    padding-left: 200px;
  } */
}
</style>
