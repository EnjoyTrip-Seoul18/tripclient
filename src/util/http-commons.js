import axios from "axios";

const { VITE_VUE_API_URL } = import.meta.env;

function localAxios(baseURL) {
  const instance = axios.create({ baseURL });
  instance.defaults.headers.common["Authorization"] = "";
  instance.defaults.headers.post["Content-Type"] = "application/json";
  instance.defaults.headers.put["Content-Type"] = "application/json";

  return instance;
}

function serverAxios() {
  const instance = axios.create({
    baseURL: VITE_VUE_API_URL,
  });
  const token = localStorage.getItem("authToken"); // 예: localStorage에 저장된 토큰
  if (token) {
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
  instance.defaults.headers.post["Content-Type"] = "application/json";
  instance.defaults.headers.put["Content-Type"] = "application/json";

  return instance;
}

export { localAxios, serverAxios };
