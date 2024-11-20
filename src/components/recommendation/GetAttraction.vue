<template>
  <div class="d-flex flex-column justify-content-center align-items-center vh-100 container-section">
    <h2 class="mb-3 header-title">
      관광지 방문 기록을 바탕으로 나만의 추천지를 확인하세요!
    </h2>
    <div class="w-50 mt-3 d-flex justify-content-center align-items-center">
      <input type="text" class="form-control h-100 search-input" v-model="searchQuery" placeholder="검색어를 입력하세요" />
      <button class="btn btn-outline-secondary w-25 h-100 search-button" @click="addToRecommendations">
        검색
      </button>
    </div>
    <div v-if="recommendations.length > 0" class="d-flex flex-wrap justify-content-center mt-3">
      <span v-for="(item, index) in recommendations" :key="index"
        class="btn me-2 mb-2 recommendation-item" @click="removeFromRecommendations(index)">
        {{ item }}
        <RemoveItem />
      </span>
    </div>
    <div class="d-flex justify-content-center">
      <router-link to="/recommendation/type">
        <button v-if="recommendations.length > 0" class="btn btn-primary mt-3 me-2 complete-button">
          입력 완료!
        </button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRecommendationStore } from "@/stores/recommendation";
import RemoveItem from "@/assets/icons/RemoveItem.vue";

const recommendationStore = useRecommendationStore();

const searchQuery = ref("");

const addToRecommendations = () => {
  if (searchQuery.value.trim()) {
    recommendationStore.addRecommendation(searchQuery.value.trim());
    searchQuery.value = "";
  }
};

const removeFromRecommendations = (index) => {
  recommendationStore.removeRecommendation(index);
};

const clearAllRecommendations = () => {
  recommendationStore.clearRecommendations();
};

const { recommendations } = recommendationStore;
</script>

<style scoped>
/* 컨테이너 스타일 */
.container-section {
  background-color: var(--bs-light);
  /* 부트스트랩 기본 배경색 */
  padding: 30px;
  border-radius: 15px;
  /* 부드러운 곡선 */
  text-align: center;
}

/* 섹션 헤더 */
.header-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--bs-primary);
  /* 부트스트랩 primary 색상 */
  margin-bottom: 20px;
}

/* 검색 필드 스타일 */
.search-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.search-input {
  flex-grow: 1;
  border-radius: 20px 0 0 20px;
  background-color: var(--bs-white);
  /* 흰색 배경 */
  padding: 10px 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  /* 약간의 그림자 */
  outline: none;
  /* 클릭 시 테두리 제거 */
}

.search-button {
  border-radius: 0 20px 20px 0;
  background-color: var(--bs-secondary);
  /* 부트스트랩 secondary 색상 */
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  /* 약간의 그림자 */
}

/* 추천 아이템 스타일 */
.recommendation-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
}

.recommendation-item {
  background-color: var(--bs-success);
  color: white;
  border-radius: 20px;
  padding: 10px 15px;
  margin: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
}

.recommendation-item:hover {
  background-color: var(--bs-danger);
}

.complete-button {
  margin-top: 20px;
  background-color: var(--bs-primary);
  color: white;
  border-radius: 20px;
  padding: 10px 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  /* 약간의 그림자 */
}
</style>
