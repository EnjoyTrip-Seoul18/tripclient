import { ref } from "vue";
import { defineStore } from "pinia";

export const useMemberStore = defineStore(
  "member",
  () => {
    const member = ref({});

    function resetMember() {
      member.value = {};
    }
    return { member, resetMember };
  },
  { persist: true }
);
