<template>
  <div class="container container-section">
    <div style="height: 70px"></div>
    <div class="row"></div>
    <div class="col-md-12">
      <div class="alert alert-primary mt-3 text-center fw-bold" role="alert">
        전국 관광지 정보
      </div>

      <!-- SearchForm 컴포넌트 -->
      <SearchForm :sido="sido" :gugun="gugun" :contentType="contentType" :keyword="keyword" :sidos="sidos"
        :guguns="guguns" :contentTypes="contentTypes" @search="handleSearch" />

      <!-- Kakao map -->
      <KakaoMap :lat="coordinate.lat" :lng="coordinate.lng" :draggable="true" style="width: 100%; height: 400px;"
        class="mt-3">
        <KakaoMapMarker v-for="(marker, index) in markers" :key="index" :lat="marker.lat" :lng="marker.lng">
          <div>{{ marker.name }}</div>
        </KakaoMapMarker>
      </KakaoMap>

      <!-- 관광지 리스트 -->
      <div class="row mt-3">
        <table class="table table-striped" v-if="tripList.length">
          <thead>
            <tr>
              <th></th>
              <th>대표이미지</th>
              <th>관광지명</th>
              <th>주소</th>
              <th>위도</th>
              <th>경도</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(trip, index) in tripList" :key="index">
              <td>{{ index + 1 }}</td>
              <td><img :src="trip.image" alt="대표이미지" style="width: 50px; height: 50px;" /></td>
              <td>{{ trip.name }}</td>
              <td>{{ trip.address }}</td>
              <td>{{ trip.latitude }}</td>
              <td>{{ trip.longitude }}</td>
            </tr>
          </tbody>
        </table>
        <div v-else class="text-center">검색 결과가 없습니다.</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { KakaoMap, KakaoMapMarker } from "vue3-kakao-maps";
import SearchForm from "@/components/attraction/SearchForm.vue";
import Test from "./AttractionData.vue";

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

// 검색 결과 처리
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
  ];

  tripList.splice(0, tripList.length, ...dummyData);

  if (dummyData.length > 0) {
    coordinate.lat = dummyData[0].latitude;
    coordinate.lng = dummyData[0].longitude;
  }

  markers.splice(0, markers.length, ...dummyData.map((data) => ({
    lat: data.latitude,
    lng: data.longitude,
    name: data.name,
  })));
};
</script>
<style scoped>
.container-section {
  background-color: var(--bs-light);
  padding: 30px;
  border-radius: 15px;
  text-align: center;
}
</style>