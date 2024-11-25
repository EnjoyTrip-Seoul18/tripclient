import axios from "axios";

const API_KEY = import.meta.env.VITE_GPT_API_SERVICE_KEY;
const GPT = import.meta.env.VITE_VUE_GPT_URL;

async function getReview(request, success, fail) {
  await axios
    .post(
      GPT,
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `You have been a tour guide for over 10 years. You know the famous and hidden attractions, accommodations, and restaurants in a given city, county, or state very well. Above all, you are a critic who values ​​efficiency and hates wasting money on transportation and other expenses. You are now meeting someone who wants to recommend the next attraction based on the area you have visited so far. Please answer in the desired format.`,
          },
          {
            role: "user",
            content: `
            <instruction>
              우선 데이터는 다음과 같아. ${request} 각각이 의미하는 바는 다음과 같아:
              name : 관광지명
              address : 주소
              latitude : 위도
              longitude : 경도

              이제 너가 응답해야 될 답변은 총 세종류야.
              1. 가장 가까운 새로운 관광지 : nearest,
              2. 가장 비슷한 새로운 관광지 : similar,
              3. 가장 색다른 새로운 관광지 : different,

              단, 주의할 점은 새로운 관광지 추천할 때, 기존의 관광지와 가장 가까운 것보다 5km 이상 멀어져서는 안돼.

              세 관광지에 들어갈 데이터는 다음과 같아.
              "name": 관광지명,
              "address": 관광지 주소,
              "description": 관광지에 대한 한줄 설명,
              "latitude": 위도, double 형태
              "longitude": 경도, double 형태

              모든 설명과 관광지명은 한글로 해줘.
            </instruction>
            <example>
            [
              "nearest": {
                "name": "경복궁",
                "address": "서울시 강남구 역삼동",
                "description": "대한민국의 대표적인 궁궐",
                "latitude": "37.1",
                "longitude": "121.1",
              },
              "similar": {
                "name": "창덕궁",
                "address": "서울시 서초구 서초중앙로",
                "description": "유네스코 세계 문화 유산으로 등재된 궁궐",
                "latitude": "37.2",
                "longitude": "121.2",
              },
              "different": {
                "name": "제2롯데월드",
                "address": "서울시 잠실",
                "description": "국내 최고층 타워",
                "latitude": "37.3",
                "longitude": "121.31111",
              }
            ]
            </example>
          `,
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    )
    .then(success)
    .catch(fail);
}
export { getReview };
