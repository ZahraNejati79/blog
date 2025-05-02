const { default: axios } = require("axios");

const app = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

const http = {
  get: app.get,
  post: app.post,
  put: app.put,
  patch: app.patch,
  delete: app.delete,
};

export default http;
