import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import RecommendationView from "@/views/RecommendationView.vue";
import BoardView from "@/views/BoardView.vue";
import AttractionView from "@/views/AttractionView.vue";
import MemberLogin from "@/components/member/MemberLogin.vue";
import MemberJoin from "@/components/member/MemberJoin.vue";
import MemberMyPage from "@/components/member/MemberMyPage.vue";
import RecommendationType from "@/components/recommendation/RecommendationType.vue";
import GetAttraction from "@/components/recommendation/GetAttraction.vue";
import RecommendationResult from "@/components/recommendation/RecommendationResult.vue";

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
      children: [
        {
          path: "",
          name: "GetAttraction",
          component: GetAttraction,
        },
        {
          path: "type",
          name: "recommendationType",
          component: RecommendationType,
        },
        {
          path: "result/:type",
          name: "recommendationResult",
          component: RecommendationResult,
        },
      ],
    },
    {
      path: "/board",
      name: "board",
      component: BoardView,
    },
    {
      path: "/attraction",
      name: "attraction",
      component: AttractionView,
    },
    {
      path: "/member",
      name: "member",
      redirect: "/member/login",
      children: [
        {
          path: "login",
          name: "memberLogin",
          component: MemberLogin,
        },
        {
          path: "join",
          name: "memberJoin",
          component: MemberJoin,
        },
        {
          path: "mypage/:memberId",
          name: "memberMyPage",
          component: MemberMyPage,
        },
      ],
    },
  ],
});

router.afterEach(() => {
  const collapseBtn = document.querySelector(".container-fluid>button");
  const collapse = document.getElementById("navbarScroll");
  collapseBtn.setAttribute("class", "navbar-toggler");
  collapseBtn.setAttribute("aria-expanded", false);
  collapse.setAttribute("class", "collapse navbar-collapse");
});

export default router;