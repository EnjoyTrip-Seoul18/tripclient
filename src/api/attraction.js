import { areaAxios, serverAxios } from "@/util/http-commons";

const area = areaAxios();
const server = serverAxios();

async function getData(url, success, fail) {
  await area.get(url).then(success).catch(fail);
}

async function getPath(attractions, success, fail) {
  await server.post("/attraction/path", attractions).then(success).catch(fail);
}

export { getData, getPath };
