import { ref } from "vue";
import { defineStore } from "pinia";

export const useRecommendationStore = defineStore(
  "recommendation",
  () => {
    const recommendations = ref([]);
    function addRecommendation(item) {
      if (!recommendations.value.includes(item)) {
        recommendations.value.push(item);
      }
    }
    function removeRecommendation(index) {
      recommendations.value.splice(index, 1);
    }
    function clearRecommendations() {
      recommendations.value = [];
    }
    return {
      recommendations,
      addRecommendation,
      removeRecommendation,
      clearRecommendations,
    };
  },
  { persist: true }
);
