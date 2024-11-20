import { ref } from "vue";
import { defineStore } from "pinia";

export const useMemberStore = defineStore(
  "member",
  () => {
    const member = ref({});

    function getMember(memberId) {
      member.value = {
        memberId: "ssafy",
        memberPwd: "1234",
        memberName: "김싸피",
        email: "ssafy@ssafy.com",
        address: "서울시 강남구 역삼동",
        joindate: "2024-01-01",
      };
    }

    return { member, getMember };
  },
  { persist: true }
);
