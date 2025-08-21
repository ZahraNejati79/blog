import Breadcrumbs from "@/ui/Breadcrumbs";
import React from "react";
import PostForm from "./_/PostForm";
import { cookies } from "next/headers";
import { setCookieOnReq } from "@/utils/setCookieOnReq";

async function CreatePost() {
  const cookiesStore = await cookies();
  const options = setCookieOnReq(cookiesStore);
  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          {
            label: "پست ها",
            href: "/profile/posts",
          },
          {
            label: "ایجاد پست",
            href: "/profile/posts/create",
            active: true,
          },
        ]}
      />
      <PostForm option={options} />
    </div>
  );
}

export default CreatePost;
