import { setCookieOnReq } from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";
import { getAllUsersApi } from "./authApiService";
import { getAllCommentsApi } from "./commentService";
import { getAllPostsApi } from "./postServices";

export async function fetchCardsData() {
  const cookiesStore = await cookies();
  const options = setCookieOnReq(cookiesStore);

  try {
    const data = await Promise.all([
      getAllCommentsApi(options),
      getAllPostsApi(options),
      getAllUsersApi(options),
    ]);

    const numOfUsers = Number(data[2].users.length ?? "0");
    const numOfComments = Number(data[0].commentsCount ?? "0");
    const numOfPosts = Number(data[1].posts.length ?? "0");

    return {
      numOfComments,
      numOfPosts,
      numOfUsers,
    };
  } catch (error) {
    console.error("fetchCardsData error:", error);
  }
}
