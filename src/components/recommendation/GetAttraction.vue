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
      <button class="btn btn-outline-secondary w-25 h-100" @click="search">
        검색
      </button>
    </div>
    <div
      v-if="selected.length > 0"
      class="d-flex flex-wrap justify-content-center mt-3"
    >
      <span
        v-for="(item, index) in selected"
        :key="index"
        class="btn btn-outline-primary me-2 mb-2"
        @click="removeItem(index)"
      >
        {{ item }}
        <RemoveItem />
      </span>
    </div>
    <div class="d-flex justify-content-center">
      <button
        v-if="selected.length > 0"
        class="btn btn-primary mt-3 me-2"
        @click="clearAll"
      >
        입력 완료!
      </button>
      <button
        v-if="selected.length > 0"
        class="btn btn-danger mt-3"
        @click="clearAll"
      >
        모두 지우기
      </button>
    </div>
  </div>
</template>

<script setup>
import RemoveItem from "@/assets/icons/RemoveItem.vue";
import { ref } from "vue";

const STORAGE_KEY = "visited";
const searchQuery = ref("");
const selected = ref([]);

const loadFromLocalStorage = () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    selected.value = JSON.parse(savedData);
  }
};

const search = () => {
  if (searchQuery.value.trim()) {
    selected.value.push(searchQuery.value);
    saveToLocalStorage();
    searchQuery.value = "";
  }
};

const saveToLocalStorage = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(selected.value));
};

const removeItem = (index) => {
  selected.value.splice(index, 1);
  saveToLocalStorage();
};

const clearAll = () => {
  selected.value = [];
  localStorage.removeItem(STORAGE_KEY);
};

loadFromLocalStorage();
</script>

<style scoped></style>
