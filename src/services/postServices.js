export async function getPostBySlug(slug) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/post/slug/${slug}`
  );

  const { data } = await res.json();
  const { post } = data || {};

  return post;
}

export async function getPosts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/list`);
  const { data } = await res.json();
  const { posts } = data || {};
  return posts;
}
