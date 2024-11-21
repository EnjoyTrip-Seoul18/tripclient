import { serverAxios } from "@/util/http-commons";

const server = serverAxios();

async function login(form, success, fail) {
  // console.log("member.js 로그인");
  await server.post("/member/login", form).then(success).catch(fail);
}

async function info(header, success, fail) {
  // console.log("member.js 회원 정보 요청");
  await server
    .get("/member/info", {
      headers: {
        Authorization: `${header.trim()}`,
      },
    })
    .then(success)
    .catch(fail);
}

async function updateMember(member, success, fail) {
  console.log("member.js 회원 정보 수정 요청");
  await server
    .post("/member/update", member)
    .then(success)
    .catch(fail);
}

async function deleteMember(memberId, success, fail) {
  console.log("member.js 회원 삭제 요청");
  await server
    .delete("/member/delete", {
      data: { memberId },
    })
    .then(success)
    .catch(fail);
}

export { login, info, updateMember, deleteMember };

