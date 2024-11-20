import { localAxios } from "@/util/http-commons";
import { useRecommendationStore } from "@/stores/recommendation";

async function nearest() {
  const local = localAxios();
  const { recommendations } = useRecommendationStore();
  await local
    .post("/src/data/attractions/attractions.json")
    .then((response) => {
      recommendations.value = response;
      console.log(recommendations);
    })
    .catch((err) => {
      console.error(err);
    });
}

async function similar() {}

async function different() {}

export { nearest, similar, different };
