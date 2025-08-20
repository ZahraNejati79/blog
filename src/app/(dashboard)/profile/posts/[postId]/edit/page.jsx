import Breadcrumbs from "@/ui/Breadcrumbs";
import { setCookieOnReq } from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";
import React from "react";
import PostForm from "../../create/_/PostForm";
import { getPostById } from "@/services/postServices";
import { notFound } from "next/navigation";

async function EditPost({ params: { postId } }) {
  const cookiesStore = await cookies();
  const options = setCookieOnReq(cookiesStore);

  const { post } = await getPostById(postId);
  if (!post) {
    return notFound();
  }

  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          {
            label: "پست ها",
            href: "/profile/posts",
          },
          {
            label: "ویرایش پست",
            href: `/profile/posts/${postId}/edit/`,
            active: true,
          },
        ]}
      />
      <PostForm option={options} postToEdit={post} />
    </div>
  );
}

export default EditPost;
