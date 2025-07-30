import { getPosts } from "@/services/postServices";
import { setCookieOnReq } from "@/utils/setCookieOnReq";
import PostList from "app/blogs/_components/PostList";
import { cookies } from "next/headers";
import queryString from "query-string";
import React from "react";

export default async function Category({ params, searchParams }) {
  const { categorySlug } = params;
  const querise =
    queryString.stringify(searchParams) + `&categorySlug=${categorySlug}`;
  const cookieStore = cookies();
  const options = setCookieOnReq(cookieStore);

  const posts = await getPosts(options, querise);

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
