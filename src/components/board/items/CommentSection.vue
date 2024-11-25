<template>
  <div>
    <h5 class="mb-3">댓글</h5>
    <div v-for="(comment, index) in comments" :key="index" class="comment-card mb-3 p-3 shadow-sm">
      <div class="d-flex justify-content-between align-items-center">
        <strong>{{ comment.author }}</strong>
        <div>
          <button class="btn btn-sm btn-outline-secondary me-2" @click="editComment(index)">수정</button>
          <button class="btn btn-sm btn-outline-danger" @click="deleteComment(index)">삭제</button>
        </div>
      </div>
      <p class="mb-0" v-if="!comment.isEditing">{{ comment.content }}</p>
      <div v-else>
        <input type="text" class="form-control mb-2" v-model="comment.editContent" />
        <button class="btn btn-sm btn-primary" @click="saveEdit(index)">저장</button>
      </div>
    </div>

    <CommentInput @add-comment="addComment" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import CommentInput from "./CommentInput.vue";

const comments = ref([
  { author: "사용자1", content: "첫 번째 댓글입니다.", isEditing: false, editContent: "" },
  { author: "사용자2", content: "두 번째 댓글입니다.", isEditing: false, editContent: "" },
]);

const addComment = (newComment) => {
  comments.value.push({
    ...newComment,
    isEditing: false,
    editContent: "",
  });
};

const deleteComment = (index) => {
  comments.value.splice(index, 1);
};

const editComment = (index) => {
  const comment = comments.value[index];
  comment.isEditing = true;
  comment.editContent = comment.content;
};

const saveEdit = (index) => {
  const comment = comments.value[index];
  if (comment.editContent.trim() === "") {
    alert("수정 내용은 비어 있을 수 없습니다.");
    return;
  }
  comment.content = comment.editContent;
  comment.isEditing = false;
};
</script>

<style scoped>
.comment-card {
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
}
</style>
