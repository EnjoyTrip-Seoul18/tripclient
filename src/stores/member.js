import { ref } from 'vue'
import { defineStore } from "pinia";

export const useMemberStore = defineStore("member", () => {
  const isLoggedIn = ref(false);
  const accessToken = ref(null);
  const refreshToken = ref(null);

  const login = (newAccessToken, newRefreshToken) => {
    isLoggedIn.value = true;
    accessToken.value = newAccessToken;
    refreshToken.value = newRefreshToken;
  };

  const logout = () => {
    isLoggedIn.value = false;
    accessToken.value = null;
    refreshToken.value = null;
  };

  return { isLoggedIn, accessToken, refreshToken, login, logout };
},{persist : true});
