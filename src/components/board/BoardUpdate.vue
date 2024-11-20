<template>
  <div class="container mt-5">
    <div class="card shadow-sm fill-color2 p-4">
      <h3 class="text-center mb-4">게시글 수정</h3>
      <form @submit.prevent="onSubmit">
        <!-- 제목 입력 -->
        <div class="mb-3">
          <label for="title" class="form-label">제목</label>
          <input type="text" id="title" class="form-control" placeholder="제목을 입력하세요" v-model="formData.title"
            required />
        </div>

        <!-- 내용 입력 -->
        <div class="mb-3">
          <label for="content" class="form-label">내용</label>
          <textarea id="content" class="form-control" rows="6" placeholder="내용을 입력하세요" v-model="formData.content"
            required></textarea>
        </div>

        <!-- 버튼 섹션 -->
        <div class="d-flex justify-content-center mt-4">
          <!-- 목록으로 돌아가기 버튼 -->
          <router-link to="/board/list?pgno=1" class="btn btn-secondary me-2">
            목록으로 돌아가기
          </router-link>

          <!-- 게시글 수정 버튼 -->
          <button type="submit" class="btn btn-success">
            게시글 수정
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// 초기 데이터 (게시글 상세보기에서 받아온 데이터 예시)
const existingPost = {
  title: "기존 게시글 제목",
  content: "기존 게시글 내용입니다. 여기에 내용을 수정하세요.",
};

// Form 데이터 초기화
const formData = ref({
  title: existingPost.title,
  content: existingPost.content,
});

// 제출 핸들러
const onSubmit = () => {
  console.log("수정된 게시글 데이터:", formData.value);
  alert("게시글이 수정되었습니다!");
};
</script>

<style>
.fill-color2 {
  background-color: #f0f8ff;
  /* 기본 색상 (하늘색 계열) */
  border-radius: 8px;
  border: 1px solid #ccc;
}

.card {
  max-width: 600px;
  margin: 0 auto;
}
</style>
