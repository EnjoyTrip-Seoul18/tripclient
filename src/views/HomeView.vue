<template>
  <div>
    <section class="theater-mode d-flex justify-content-center align-items-center vh-100">
      <div class="text-center">
        <h1 class="display-3 fw-bold mb-4">AI를 통한 관광지 추천</h1>
        <p class="lead">방문지를 기반으로 맞춤형 관광지를 추천합니다.</p>
        <router-link to="/recommendation" class="btn btn-primary btn-lg mt-3">
          추천 시스템 체험하기
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style scoped>
section {
  padding: 30px;
  text-align: center;
}

.theater-mode {
  background-color: var(--bs-light);
  color: var(--bs-primary);
}
</style>
