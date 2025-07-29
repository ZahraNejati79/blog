"use server";

import { createCommentApi } from "@/services/commentService";
import { setCookieOnReq } from "@/utils/setCookieOnReq";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function createComment(postId, parentId, formData) {
  const cookiesStore = cookies();
  const options = setCookieOnReq(cookiesStore);

  const rawFormData = {
    postId,
    parentId,
    text: formData.get("text"),
  };

  console.log("====================================");
  console.log("options", options.headers);
  console.log("====================================");
  try {
    const { message } = await createCommentApi(rawFormData, options);
    console.log("message", message);
  } catch (error) {
    console.log(error?.response?.data?.message);
  }

  revalidatePath("/blogs/[slug]");
}
