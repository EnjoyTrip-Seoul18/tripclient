import { serverAxios } from "@/util/http-commons";

const server = serverAxios();

async function listComment(request, success, fail) {
  await server
    .get(`/comment/list/${boardId}`, {
      headers: {
        Authorization: `Bearer ${request.accessToken}`,
      },
    })
    .then(success)
    .catch(fail);
}

async function writeComment(request, success, fail) {
  await server
    .post(`/comment/`, request.comment, {
      headers: {
        Authorization: `Bearer ${request.accessToken}`,
      },
    })
    .then(success)
    .catch(fail);
}

async function updateComment(request, success, fail) {
  await server
    .put(`/comment/${request.comment.commentId}`, request.comment, {
      headers: {
        Authorization: `Bearer ${request.accessToken}`,
      },
    })
    .then(success)
    .catch(fail);
}

async function deleteComment(request, success, fail) {
  await server
    .delete(`/comment/${request.commentId}`, {
      headers: {
        Authorization: `Bearer ${request.accessToken}`,
      },
    })
    .then(success)
    .catch(fail);
}

export { listComment, writeComment, updateComment, deleteComment };
