<template>
  <div class="recommendation-container d-flex flex-column justify-content-center align-items-center vh-100">
    <h2 class="mb-4 recommendation-header">알아보고 싶은 추천지는?</h2>
    <div class="recommendation-buttons d-flex flex-column gap-4 w-50">
      <button v-for="(item, index) in buttons" :key="index"
        :class="['btn btn-lg w-100 recommendation-item', item.class, { visible: showItems[index] }]">
        {{ item.text }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// 버튼 데이터와 상태 관리
const buttons = [
  { text: "가장 가까운 곳을 알고 싶어요!", class: "btn-primary" },
  { text: "비슷한 곳을 알고 싶어요!", class: "btn-info text-white" },
  { text: "색다른 관광지를 알고 싶어요!", class: "btn-success" },
];

const showItems = ref([false, false, false]);

// 순차적으로 버튼 표시
onMounted(() => {
  buttons.forEach((_, index) => {
    setTimeout(() => {
      showItems.value[index] = true;
    }, index * 300); // 300ms 간격으로 버튼 표시
  });
});
</script>

<style scoped>
/* 컨테이너 스타일 */
.recommendation-container {
  background-color: var(--bs-light);
  /* 부트스트랩 기본 배경 */
  padding: 30px;
  border-radius: 15px;
  text-align: center;
}

/* 헤더 스타일 */
.recommendation-header {
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--bs-primary);
  /* 기본 파란색 */
}

/* 버튼 리스트 스타일 */
.recommendation-buttons {
  margin-top: 20px;
}

/* 개별 버튼 스타일 */
.recommendation-item {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

/* 순차 등장 */
.recommendation-item.visible {
  opacity: 1;
  transform: translateY(0);
}

/* 간격 스타일 */
.gap-4 {
  gap: 30px !important;
  /* 버튼 간격 조정 */
}
</style>
