import { ref } from "vue";
import { defineStore } from "pinia";
import { getMemberById } from "@/api/local/member";

export const useMemberStore = defineStore(
  "member",
  () => {
    const member = ref({});
    async function getMember() {
      getMemberById();
    }
    function resetMember() {
      member.value = {};
    }
    return { member, getMember, resetMember };
  },
  { persist: true }
);
