<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
    <div class="container-fluid">
      <router-link :to="{ name: 'home' }" class="navbar-brand">
        <img src="@/assets/logo.png" class="rounded mx-auto d-block logo" alt="로고" />
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
        aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px">
          <li v-for="menu in menuList" :key="menu.routeName" class="nav-item">
            <router-link :to="{ name: menu.routeName }" class="nav-link">
              {{ menu.name }}
            </router-link>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px">
          <li class="nav-item">
            <router-link to="/" @click.prevent="logout" class="nav-link">
              로그아웃
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const menuList = ref([
  { name: "추천", routeName: "recommendation", show: true },
  { name: "커뮤니티", routeName: "board", show: true },
  { name: "관광지", routeName: "attraction", show: true },
  { name: "마이페이지", routeName: "member", show: true },
]);

const logout = () => {
  console.log("User logged out!");
};
</script>

<style scoped>
.navbar {
  background-color: #f8f9fa;
}

.nav-link:hover {
  color: #007bff;
}

.logo {
  width: 150px;
  height: auto;
}

@media (max-width: 768px) {
  .logo {
    width: 100px;
  }
}

@media (max-width: 480px) {
  .logo {
    width: 75px;
  }
}
</style>
