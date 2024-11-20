<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8 col-md-10 col-sm-12">
        <h2 class="my-3 py-3 text-center">마이페이지</h2>
      </div>
      <form
        @submit.prevent="updateMember"
        class="mb-3 mt-3 col-lg-8 col-md-10 col-sm-12"
      >
        <div class="form-group mb-3">
          <label for="memberId" class="form-label">아이디 : </label>
          <input
            type="text"
            class="form-control"
            id="memberId"
            v-model="member.memberId"
            readonly
          />
        </div>

        <div class="form-group mb-3">
          <label for="memberName" class="form-label">이름 : </label>
          <input
            type="text"
            class="form-control"
            id="memberName"
            v-model="member.memberName"
          />
        </div>

        <div class="form-group mb-3">
          <label for="email" class="form-label">이메일 : </label>
          <input
            type="email"
            class="form-control"
            id="email"
            v-model="member.email"
            placeholder="example@domain.com"
          />
        </div>

        <div class="form-group mb-3">
          <label for="address" class="form-label">주소 : </label>
          <input
            type="text"
            class="form-control"
            id="address"
            v-model="member.address"
            placeholder="서울시 강남구 역삼동"
          />
        </div>

        <div class="form-group mb-3">
          <label for="joindate" class="form-label">가입일 : </label>
          <input
            type="text"
            class="form-control"
            id="joindate"
            v-model="member.joindate"
            readonly
          />
        </div>
        <div class="d-flex justify-content-center mb-3">
          <button type="submit" class="btn btn-outline-primary">
            정보 수정
          </button>
          <form @submit.prevent="deleteMember">
            <button
              type="submit"
              class="btn btn-outline-danger"
              @click="confirmDeletion"
            >
              회원 삭제
            </button>
          </form>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useMemberStore } from "@/stores/member";
import { onBeforeMount } from "vue";

const memberStore = useMemberStore();
const member = memberStore.member;

onBeforeMount(async () => {
  memberStore.getMember();
});

const updateMember = async () => {
  try {
    const response = await fetch("/member/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.member),
    });
    if (!response.ok) throw new Error("정보 수정 실패");
    alert("정보가 수정되었습니다.");
  } catch (error) {
    alert("정보 수정 중 오류가 발생했습니다.");
    console.error(error);
  }
};

const deleteMember = async () => {
  if (!confirm("정말로 회원을 삭제하시겠습니까?")) return;
  try {
    const response = await fetch("/member/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ memberId: this.member.memberId }),
    });
    if (!response.ok) throw new Error("회원 삭제 실패");
    alert("회원이 삭제되었습니다.");
    this.$router.push("/");
  } catch (error) {
    alert("회원 삭제 중 오류가 발생했습니다.");
    console.error(error);
  }
};
</script>

<style scoped></style>
