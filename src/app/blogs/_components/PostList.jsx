import React from "react";

export default async function PostList() {
  await new Promise((res) => setTimeout(() => res(), 3000));

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/list`);
  const {
    data: { posts },
  } = await res.json();

  console.log("posts", posts);
  return (
    <div>
      {posts.map((item) => (
        <div>{item.title}</div>
      ))}
    </div>
  );
}
