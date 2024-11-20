import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import RecommendationView from "@/views/RecommendationView.vue";
import BoardView from "@/views/BoardView.vue";
import AttractionView from "@/views/AttractionView.vue";
import MemberView from "@/views/MemberView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/recommendation",
      name: "recommendation",
      component: RecommendationView,
    },
    {
      path: "/board",
      name: "board",
      component: BoardView
    },
    {
      path: "/attraction",
      name: "attraction",
      component: AttractionView
    },
    {
      path: "/member",
      name: "member",
      component: MemberView
    }
  ],
});

export default router;
