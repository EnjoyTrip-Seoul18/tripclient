import { createApp } from "vue";
import { createPinia } from "pinia";
import { createBootstrap } from 'bootstrap-vue-next'
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import "bootstrap";

const app = createApp(App);
const pinia = createPinia();

pinia.use(piniaPluginPersistedstate);

app.use(pinia);
app.use(router);
app.use(createBootstrap());

app.mount("#app");
