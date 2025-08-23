import React from "react";
import PostList from "../_components/PostList";
import { cookies } from "next/headers";
import { setCookieOnReq } from "@/utils/setCookieOnReq";
import { getPosts } from "@/services/postServices";
import queryString from "query-string";

export const metadata = {
  title: "وبلاگ ها",
};

async function BlogPage({ searchParams }) {
  const querise = queryString.stringify(searchParams);
  const cookieStore = cookies();
  const options = setCookieOnReq(cookieStore);

  const { posts } = await getPosts(options, querise);
  console.log("posts", posts);

  return <PostList posts={posts} />;
}

export default BlogPage;
