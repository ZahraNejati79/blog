import React from "react";
import PostList from "../_components/PostList";
import { cookies } from "next/headers";
import { setCookieOnReq } from "@/utils/setCookieOnReq";
import { getPosts } from "@/services/postServices";

export const metadata = {
  title: "وبلاگ ها",
};

async function BlogPage() {
  const cookieStore = cookies();
  const options = setCookieOnReq(cookieStore);

  const posts = await getPosts(options);

  return <PostList posts={posts} />;
}

export default BlogPage;
