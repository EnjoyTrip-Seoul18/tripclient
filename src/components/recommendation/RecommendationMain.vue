<template>
  <div class="container container-section">
    <div style="height: 70px"></div>

    <!-- 검색 섹션 -->
    <div class="row">
      <div class="col-md-12">
        <h2 class="mb-3 header-title">어디가지?</h2>
        <p>우선... 지금까지 방문한 곳들을 볼까요?</p>
        <SearchForm :sido="sido" :gugun="gugun" :contentType="contentType" :keyword="keyword" :sidos="sidos"
          :guguns="guguns" :contentTypes="contentTypes" @search="handleSearch" />
      </div>
    </div>

    <!-- 지도 섹션 -->
    <div>
      <KakaoMap :lat="coordinate.lat" :lng="coordinate.lng" :draggable="true" style="width: 100%; height: 400px"
        class="mt-3" id="kakao-map">
        <div v-for="(marker, index) in markers" :key="index">
          <KakaoMapMarker :lat="marker.lat" :lng="marker.lng" @onClickKakaoMapMarker="toggleOverlay(index)"
            :clickable="true" />
          <KakaoMapCustomOverlay :lat="marker.lat" :lng="marker.lng" :yAnchor="1.4" :visible="marker.visible"
            :content="generateOverlayContent(marker.name, marker.image, marker.address)" />
        </div>
      </KakaoMap>
    </div>

    <!-- 추천 여행지 리스트 -->
    <div class="row mt-3">
      <h2>추천 여행지 목록</h2>
      <table class="table table-striped" v-if="tripList.length">
        <thead>
          <tr>
            <th>#</th>
            <th>이미지</th>
            <th>관광지명</th>
            <th>계획</th>
          </tr>
        </thead>
        <tbody>
          <RecommendationItem v-for="(item, index) in tripList" :key="index" :item="item" :index="index" />
        </tbody>
      </table>
      <div v-else class="text-center">추천할 여행지가 없습니다.</div>
    </div>
    <RecommendationResult class="mt-3"/>

    <!-- 최적화 버튼 -->
    <div class="text-center mt-5">
      <button class="btn btn-primary" @click="getRecommendationResult">
        최적의 여행 계획 짜기!
      </button>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import {
  KakaoMap,
  KakaoMapMarker,
  KakaoMapCustomOverlay,
} from "vue3-kakao-maps";
import SearchForm from "@/components/attraction/SearchForm.vue";
import { useRecommendationStore } from "@/stores/recommendation";
import router from "@/router";
import RecommendationItem from "./RecommendationItem.vue";
import RecommendationResult from "./RecommendationResult.vue";

const coordinate = reactive({
  lat: 33.450701,
  lng: 126.570667,
});

const sido = ref("0");
const gugun = ref("0");
const contentType = ref("0");
const keyword = ref("");

const sidos = reactive([
  { value: "1", label: "서울" },
  { value: "2", label: "부산" },
  { value: "3", label: "대구" },
]);

const guguns = reactive([
  { value: "1", label: "강남구" },
  { value: "2", label: "서초구" },
  { value: "3", label: "송파구" },
]);

const contentTypes = reactive([
  { value: "12", label: "관광지" },
  { value: "14", label: "문화시설" },
  { value: "15", label: "축제공연행사" },
  { value: "25", label: "여행코스" },
  { value: "28", label: "레포츠" },
  { value: "32", label: "숙박" },
  { value: "38", label: "쇼핑" },
  { value: "39", label: "음식점" },
]);

const tripList = reactive([]);
const markers = reactive([]);
const { recommendation } = useRecommendationStore();

const generateOverlayContent = (name, image, address) => `
  <div
    style="
      padding: 10px;
      background-color: white;
      border: 1px solid #ccc;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    "
  >
  <div style="font-weight: bold; margin-bottom: 5px">${name}</div>
  <div style="display: flex">
    <div style="margin-right: 10px">
      <img src="${image}" />
    </div>
      <div>${address}</div>
    </div>
  </div>
`;

const scrollToElement = () => {
  document.querySelector("#kakao-map").scrollIntoView(true);
};

const handleSearch = ({ sido, gu, type, keyword }) => {
  const dummyData = [
    {
      image: "https://via.placeholder.com/50",
      name: "Sample Place 1",
      address: "제주특별자치도 제주시",
      latitude: 33.450701,
      longitude: 126.570667,
    },
    {
      image: "https://via.placeholder.com/50",
      name: "Sample Place 2",
      address: "제주특별자치도 서귀포시",
      latitude: 33.451701,
      longitude: 126.571667,
    },
    {
      name: "Seoul",
      address: "서울",
      latitude: 37.5665,
      longitude: 126.978,
    },
    {
      name: "Incheon",
      address: "인천",
      latitude: 37.4563,
      longitude: 126.7052,
    },
    {
      name: "Daejeon",
      address: "대전",
      latitude: 36.3504,
      longitude: 127.3845,
    },
    {
      name: "Daegu",
      address: "대구",
      latitude: 35.8722,
      longitude: 128.6014,
    },
    {
      name: "Busan",
      address: "부산",
      latitude: 35.1796,
      longitude: 129.0756,
    },
    {
      name: "Ulsan",
      address: "울산",
      latitude: 35.5384,
      longitude: 129.3114,
    },
    {
      name: "Gwangju",
      address: "광주",
      latitude: 35.1595,
      longitude: 126.8526,
    },
    {
      name: "Suwon",
      address: "수원",
      latitude: 37.2636,
      longitude: 127.0286,
    },
    {
      name: "Jeonju",
      address: "전주",
      latitude: 35.8251,
      longitude: 127.1453,
    },
    {
      name: "Jeju",
      address: "제주",
      latitude: 33.5007,
      longitude: 126.5312,
    },
  ];

  tripList.splice(0, tripList.length, ...dummyData);

  if (dummyData.length > 0) {
    coordinate.lat = dummyData[0].latitude;
    coordinate.lng = dummyData[0].longitude;
  }

  markers.splice(
    0,
    markers.length,
    ...dummyData.map((data, index) => ({
      lat: data.latitude,
      lng: data.longitude,
      name: data.name,
      image: data.image,
      address: data.address,
      visible: false,
    }))
  );

  scrollToElement();
};

const toggleOverlay = (index) => {
  markers.forEach((marker, i) => {
    marker.visible = i === index;
  });
};

const getRecommendationResult = () => {
  if (recommendation.length === 0) {
    alert("여행지를 하나 이상 선택하세요!");
    return;
  }

  console.log("Recommendation:", recommendation);
  router.push("/recommendation/review");
};
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
