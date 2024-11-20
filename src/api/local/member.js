import { localAxios } from "@/util/http-commons";
import { useMemberStore } from "@/stores/member";

async function getMemberById() {
  const local = localAxios();
  const { member } = useMemberStore();
  await local
    .get("/src/data/member/member.json")
    .then((response) => {
      member.value = response;
      console.log(member);
    })
    .catch((error) => {
      console.error(error);
    });
}

export { getMemberById };
