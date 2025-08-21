import http from "./httpServices";

export async function getCategories(options) {
  return http.get("/category/list", options).then(({ data }) => data.data);
}
