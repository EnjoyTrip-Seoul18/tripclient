import { serverAxios } from "@/util/http-commons";

const server = serverAxios();
async function login(form, success, fail) {
  console.log("member.js 로그인");
  await server.post("/member/login", form).then(success).catch(fail);
}

export { login };
