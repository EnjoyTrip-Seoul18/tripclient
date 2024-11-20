import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import RecommendationView from "@/views/RecommendationView.vue";
import BoardView from "@/views/BoardView.vue";
import AttractionView from "@/views/AttractionView.vue";
import MemberLogin from "@/components/member/MemberLogin.vue";
import MemberJoin from "@/components/member/MemberJoin.vue";
import MemberMyPage from "@/components/member/MemberMyPage.vue";
import BoardList from "@/components/board/BoardList.vue";
import BoardDetail from "@/components/board/BoardDetail.vue";
import BoardUpdate from "@/components/board/BoardUpdate.vue";
import BoardWrite from "@/components/board/BoardWrite.vue";

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
      name: "boardView",
      component: BoardView,
      redirect: { path: "/board/list", query: { pgno: "1" } },
      children: [
        {
          path: "list",
          name: "boardList",
          component: BoardList
        },
        {
          path: "detail",
          name: "boardDetail",
          component: BoardDetail
        },
        {
          path: "update",
          name: "boardUpdate",
          component: BoardUpdate
        },
        {
          path: "write",
          name: "boardWrite",
          component: BoardWrite
        },
      ]
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

export default router;
