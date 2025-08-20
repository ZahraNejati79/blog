import http from "./httpServices";

export async function getPostBySlug(slug) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/post/slug/${slug}`
  );

  const { data } = await res.json();
  const { post } = data || {};

  return post;
}

export async function getPosts(querise, options) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/post/list?${querise}`,
    options
  );
  const { data } = await res.json();
  const { posts, totalPages } = data || {};
  return { posts, totalPages };
}

export async function getAllPostsApi(options) {
  return http.get("/post/list", options).then(({ data }) => data.data);
}

export async function likePostApi(postId) {
  return http.post(`/post/like/${postId}`).then(({ data }) => data.data);
}

export async function bookmarkPostApi(postId) {
  return http.post(`/post/bookmark/${postId}`).then(({ data }) => data.data);
}

export async function createPostApi(data) {
  return http.post(`/post/create/`, data).then(({ data }) => data.data);
}

export async function editPostApi({ id, data }) {
  return http.patch(`/post/edit/${id}`, data).then(({ data }) => data.data);
}

export async function getPostById( id ) {
  return http.get(`/post/${id}/`).then(({ data }) => data.data);
}
