<template>
  <div class="container container-section">
    <div style="height: 70px"></div>
    <div class="row"></div>
    <div class="col-md-12">
      <h2 class="mb-3 header-title">최적의 여행계획 짜기!</h2>
      <KakaoMap
        :lat="latLngList[latLngList.length - 1].lat"
        :lng="latLngList[latLngList.length - 1].lng"
        :draggable="true"
        style="width: 100%; height: 400px"
        class="mt-3"
      >
        <KakaoMapPolyline :latLngList="latLngList" />
      </KakaoMap>
    </div>
    <div v-for="(data, index) in latLngList" :key="index">
      {{ attractions[index] }}
    </div>
  </div>
</template>
<script setup>
import { getPath } from "@/api/attraction";
import { onBeforeMount, ref } from "vue";
import { KakaoMap, KakaoMapPolyline } from "vue3-kakao-maps";
import { useStorageStore } from "@/stores/storage";

const { start, mid, end } = useStorageStore();
const attractions = ref([...start, ...mid, ...end]);
const latLngList = ref([
  {
    index: 0,
    name: "Seoul",
    lat: 37.5665,
    lng: 126.978,
  },
  {
    index: 1,
    name: "Incheon",
    lat: 37.4563,
    lng: 126.7052,
  },
  {
    index: 2,
    name: "Daejeon",
    lat: 36.3504,
    lng: 127.3845,
  },
  {
    index: 3,
    name: "Daegu",
    lat: 35.8722,
    lng: 128.6014,
  },
  {
    index: 4,
    name: "Busan",
    lat: 35.1796,
    lng: 129.0756,
  },
  {
    index: 5,
    name: "Ulsan",
    lat: 35.5384,
    lng: 129.3114,
  },
  {
    index: 6,
    name: "Gwangju",
    lat: 35.1595,
    lng: 126.8526,
  },
  {
    index: 7,
    name: "Suwon",
    lat: 37.2636,
    lng: 127.0286,
  },
  {
    index: 8,
    name: "Jeonju",
    lat: 35.8251,
    lng: 127.1453,
  },
  {
    index: 9,
    name: "Jeju",
    lat: 33.5007,
    lng: 126.5312,
  },
]);

const handleResult = async () => {
  await getPath(
    latLngList.value,
    (response) => {
      latLngList.value = response.data;
    },
    (error) => {
      console.error(error);
    }
  );
};

onBeforeMount(() => handleResult());
</script>

<style scoped>
.container-section {
  background-color: var(--bs-light);
  padding: 30px;
  border-radius: 15px;
  text-align: center;
}

.header-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--bs-primary);
  margin-bottom: 20px;
}
</style>
