import { ref } from "vue";
import { defineStore } from "pinia";

export const useTokenStore = defineStore(
  "authToken",
  () => {
    const authToken = ref();
    return { authToken };
  },
  { persist: true }
);
