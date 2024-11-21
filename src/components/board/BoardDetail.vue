<template>
  <div class="container mt-5">
    <div class="card shadow-sm fill-color2 p-4">
      <!-- 제목 -->
      <h3 class="text-center mb-4">{{ post.title }}</h3>

      <!-- 게시글 정보 -->
      <div class="mb-4 text-muted small d-flex justify-content-between">
        <div>
          <span><strong>글 번호:</strong> {{ post.id }}</span> |
          <span><strong>작성자:</strong> {{ post.author }}</span> |
          <span><strong>조회수:</strong> {{ post.views }}</span>
        </div>
        <div><strong>작성일:</strong> {{ post.createdAt }}</div>
      </div>

      <!-- 글 내용 -->
      <div class="mb-4">
        <p>{{ post.content }}</p>
      </div>

      <!-- 댓글 섹션 -->
      <div>
        <h5 class="mb-3">댓글</h5>
        <div v-for="(comment, index) in post.comments" :key="index" class="comment-card mb-3 p-3 shadow-sm">
          <strong>{{ comment.author }}</strong>
          <p class="mb-0">{{ comment.content }}</p>
        </div>
      </div>

      <!-- 버튼 섹션 -->
      <div class="d-flex justify-content-center mt-4">
        <RouterLink to="/board/list?pgno=1" class="btn btn-secondary me-2">
          목록으로 돌아가기
        </RouterLink>
        <RouterLink :to="{name : 'boardUpdate', query : {boardId : 1}}">
          <button class="btn btn-primary">수정하기</button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// 게시글 데이터
const post = ref({
  id: 123, // 글 번호
  title: "게시글 제목 예시", // 제목
  author: "작성자 이름", // 작성자
  views: 145, // 조회수
  createdAt: "2024-11-20", // 작성일
  content: `
    이곳은 게시글 내용이 들어가는 영역입니다.
    게시글은 일반적으로 여러 문단으로 구성될 수 있으며, 작성자가
    내용을 자유롭게 작성할 수 있습니다. 
    이 글은 게시판에서 볼 수 있는 게시글의 예제입니다.
    
    자유롭게 꾸며진 내용이 이곳에 들어가게 됩니다.
  `, // 게시글 내용
  comments: [
    { author: "댓글 작성자1", content: "첫 번째 댓글입니다!" },
    { author: "댓글 작성자2", content: "두 번째 댓글입니다. 좋은 글 감사합니다!" },
    { author: "댓글 작성자3", content: "유용한 정보네요." },
  ], // 댓글
});
</script>

<style>
.fill-color2 {
  background-color: #f0f8ff;
  /* 기본 색상 (하늘색 계열) */
  border-radius: 8px;
  border: 1px solid #ccc;
}

.card {
  max-width: 800px;
  margin: 0 auto;
}

.comment-card {
  background-color: #ffffff;
  /* 댓글 배경 흰색 */
  border: 1px solid #ddd;
  border-radius: 8px;
  line-height: 1.5;
}
</style>
