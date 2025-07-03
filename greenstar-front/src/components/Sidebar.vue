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
        <li class="nav-item ps-3">
          <RouterLink to="/webdev/spring" class="nav-link">Spring</RouterLink>
        </li>

        <!-- 구분선 -->
        <li><hr /></li>

        <!-- PL/SQL 섹션 -->
        <li class="nav-item text-muted fw-bold mb-1">💾 Database</li>
        <li class="nav-item ps-3">
          <RouterLink to="/db/sql" class="nav-link">SQL</RouterLink>
        </li>
        <li class="nav-item ps-3">
          <RouterLink to="/db/plsql" class="nav-link">PL/SQL</RouterLink>
        </li>

        <!-- 구분선 -->
        <li><hr /></li>
  
        <!-- Portfolio 섹션 -->
        <li class="nav-item text-muted fw-bold mb-1">🧰 Portfolio</li>
        <li class="nav-item ps-3">
          <RouterLink to="/portfolio/5" class="nav-link">Gyul TxT RPG</RouterLink>
        </li>
        <li class="nav-item ps-3">
          <RouterLink to="/portfolio/6" class="nav-link">Gemdori</RouterLink>
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
    z-index: 999;
  }

  .slide-enter-from,
  .slide-leave-to {
    transform: translateX(-100%);
    opacity: 0;
  }

  .slide-enter-active,
  .slide-leave-active {
    transition: all 0.3s ease;
  }

  .slide-enter-to,
  .slide-leave-from {
    transform: translateX(0);
    opacity: 1;
  }

  .nav-link {
    color: #333;
  }

  .nav-link
  .router-link-active {
    font-weight: bold;
    color: #0d6efd;
  }
</style>
  