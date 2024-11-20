<template>
  <div
    class="d-flex flex-column justify-content-center align-items-center vh-100"
  >
    <h2 class="mb-3">
      관광지 방문 기록을 바탕으로 나만의 추천지를 확인하세요!
    </h2>
    <div class="w-50 mt-3 d-flex justify-content-center align-items-center">
      <input
        type="text"
        class="form-control h-100"
        v-model="searchQuery"
        placeholder="검색어를 입력하세요"
      />
      <button
        class="btn btn-outline-secondary w-25 h-100"
        @click="addToRecommendations"
      >
        검색
      </button>
    </div>
    <div
      v-if="recommendations.length > 0"
      class="d-flex flex-wrap justify-content-center mt-3"
    >
      <span
        v-for="(item, index) in recommendations"
        :key="index"
        class="btn btn-outline-primary me-2 mb-2"
        @click="removeFromRecommendations(index)"
      >
        {{ item }}
        <RemoveItem />
      </span>
    </div>
    <div class="d-flex justify-content-center">
      <router-link to="/recommendation/type">
        <button
          v-if="recommendations.length > 0"
          class="btn btn-primary mt-3 me-2"
        >
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

<style scoped></style>
