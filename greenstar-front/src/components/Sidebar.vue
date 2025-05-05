<template>
    <div class="bg-light border-end vh-100 sidebar p-3">
      <ul class="nav flex-column">
  
        <!-- 홈 -->
        <li class="nav-item mb-2">
          <RouterLink to="/" class="nav-link">🏠 홈</RouterLink>
        </li>
  
        <!-- 구분선 -->
        <li><hr /></li>
  
        <!-- Algorithm 섹션 -->
        <li class="nav-item text-muted fw-bold mb-1">📘 Algorithm</li>
        <li class="nav-item ps-3">
          <RouterLink to="/algorithm/data-structure" class="nav-link">자료구조</RouterLink>
        </li>
        <li class="nav-item ps-3">
          <RouterLink to="/algorithm/algorithm" class="nav-link">알고리즘</RouterLink>
        </li>
  
        <!-- 구분선 -->
        <li><hr /></li>
  
        <!-- 웹페이지 섹션 -->
        <li class="nav-item text-muted fw-bold mb-1">🌐 Web Dev</li>
        <li class="nav-item ps-3">
          <RouterLink to="/webdev/vue-express" class="nav-link">Vue + Express</RouterLink>
        </li>
        <li class="nav-item ps-3">
          <RouterLink to="/webdev/frontend" class="nav-link">Frontend</RouterLink>
        </li>
        <li class="nav-item ps-3">
          <RouterLink to="/webdev/backend" class="nav-link">Backend</RouterLink>
        </li>

        <!-- 구분선 -->
        <li><hr /></li>
  
        <!-- Portfolio 섹션 -->
        <li class="nav-item text-muted fw-bold mb-1">🧰 Portfolio</li>
        <li class="nav-item ps-3">
          <RouterLink to="/portfolio/1" class="nav-link">포폴1</RouterLink>
        </li>
        <li class="nav-item ps-3">
          <RouterLink to="/portfolio/2" class="nav-link">포폴2</RouterLink>
        </li>
  
      </ul>
    </div>
  </template>
  
  <style scoped>
  .sidebar {
    width: 200px;
    position: fixed;
    top: 60px;
    left: 0;
    overflow-y: auto;
  }
  .nav-link {
    color: #333;
  }
  .nav-link.router-link-active {
    font-weight: bold;
    color: #0d6efd;
  }
  </style>
  