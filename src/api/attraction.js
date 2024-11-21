import { areaAxios } from "@/util/http-commons";

const area = areaAxios();

async function getData(url, success, fail) {
  await area.get(url).then(success).catch(fail);
}

export { getData }