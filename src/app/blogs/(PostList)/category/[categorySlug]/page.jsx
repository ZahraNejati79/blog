import { setCookieOnReq } from "@/utils/setCookieOnReq";
import PostList from "app/blogs/_components/PostList";
import { cookies } from "next/headers";
import React from "react";

export default async function Category({ params }) {
  const { categorySlug } = params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/post/list?categorySlug=${categorySlug}`
  );
  const { data } = await res.json();

  const { posts } = data || {};

  return (
    <div>
      {posts.length === 0 ? (
        <p>پستی برای این دسته یافت نشد!</p>
      ) : (
        <PostList posts={posts} />
      )}
    </div>
  );
}
