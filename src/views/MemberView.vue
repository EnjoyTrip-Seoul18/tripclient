<template>
    <div class="container">
        <form @submit.prevent="updateMember">
            <div class="form-group">
                <label for="memberId">아이디</label>
                <input type="text" class="form-control" id="memberId" v-model="member.memberId" readonly />
            </div>

            <div class="form-group">
                <label for="memberName">이름</label>
                <input type="text" class="form-control" id="memberName" v-model="member.memberName" />
            </div>

            <div class="form-group">
                <label for="email">이메일</label>
                <input type="email" class="form-control" id="email" v-model="member.email"
                    placeholder="example@domain.com" />
            </div>

            <div class="form-group">
                <label for="address">주소</label>
                <input type="text" class="form-control" id="address" v-model="member.address"
                    placeholder="서울시 강남구 역삼동" />
            </div>

            <div class="form-group">
                <label for="joindate">가입일</label>
                <input type="text" class="form-control" id="joindate" v-model="member.joinDate" readonly />
            </div>

            <button type="submit" class="btn btn-primary mt-3">정보 수정</button>
        </form>

        <!-- 회원 삭제 버튼 -->
        <form @submit.prevent="deleteMember" class="mt-3">
            <button type="submit" class="btn btn-danger" @click="confirmDeletion">
                회원 삭제
            </button>
        </form>
    </div>
</template>

<script setup>
const member = {
    memberId: "exampleID", // 예제 데이터
    memberName: "홍길동",
    email: "example@domain.com",
    address: "서울시 강남구 역삼동",
    joinDate: "2024-01-01",
}

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
}

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
}
</script>

<style scoped></style>
