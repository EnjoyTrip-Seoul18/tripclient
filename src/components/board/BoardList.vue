<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8 col-md-10 col-sm-12">
        <h2 class="my-3 py-3 text-center">커뮤니티</h2>
      </div>
      <MenuBar :options="menuOptions" @option-change="handleOptionChange" @search-change="handleSearchChange"
        @search-submit="handleSearchSubmit" />
      <table class="table table-hover">
        <thead>
          <tr class="text-center">
            <th scope="col">글번호</th>
            <th scope="col">제목</th>
            <th scope="col">작성자</th>
            <th scope="col">조회수</th>
            <th scope="col">작성일</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="board in boards" :key="board.boardId" class="text-center">
            <th scope="row">{{ board.boardId }}</th>
            <td class="text-start">
              <router-link :to="{ name: 'boardDetail', query: { boardId: board.boardId } }" class="board-title link-dark">
                {{ board.subject }}
              </router-link>
            </td>
            <td>{{ board.memberId }}</td>
            <td>{{ board.hit }}</td>
            <td>{{ board.registerTime }}</td>
          </tr>
        </tbody>
      </table>
      <RouterLink :to="'/board/write'">
        <button class="btn btn-primary ms-3 mb-3 row justify-content-center">글 작성</button>
      </RouterLink>
      <Pagination :total-items="100" :items-per-page="10" :current-page="currentPage" @page-change="onPageChange" />
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
// import MenuBar from '@/components/board/items/MenuBar'
// import Pagination from '@/components/board/items/Pagination'

const boards = ref([{
  boardId: 1,
  memberId: "ssafy",
  subject: "첫 게시글",
  content: "첫 내용",
  hit: 11,
  registerTime: "2024-01-01"
},
{
  boardId: 2,
  memberId: "ssafy",
  subject: "두번째 게시글",
  content: "두번째 내용",
  hit: 12,
  registerTime: "2024-01-02"
},
{
  boardId: 3,
  memberId: "ssafy",
  subject: "세번째 게시글",
  content: "세번째 내용",
  hit: 13,
  registerTime: "2024-01-03"
},
{
  boardId: 4,
  memberId: "admin",
  subject: "첫 게시글",
  content: "첫 내용",
  hit: 14,
  registerTime: "2024-01-04"
},
]);
</script>

<style></style>
