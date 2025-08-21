"use client";

import { bookmarkPostApi, likePostApi } from "@/services/postServices";
import ButtonIcon from "@/ui/ButtonIcon";
import {
  BookmarkIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

import {
  BookmarkIcon as SolidBookmarkIcon,
  HeartIcon as SolidHeartIcon,
} from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

import toast from "react-hot-toast";

export default function PostIntaction({ post }) {
  const router = useRouter();

  const likeHandler = async (postId) => {
    try {
      const { message } = await likePostApi(postId);
      toast.success(message);
      router.refresh();
    } catch (error) {
      toast.error(error);
    }
  };

  const bookmarkHandler = async (postId) => {
    try {
      const { message } = await bookmarkPostApi(postId);
      toast.success(message);
      router.refresh();
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="flex items-center gap-x-4">
      <ButtonIcon variant={"secondary"}>
        <ChatBubbleOvalLeftEllipsisIcon />
        <div>{post.commentsCount}</div>
      </ButtonIcon>
      <ButtonIcon variant={"red"} onClick={() => likeHandler(post.id)}>
        {post.isLiked ? <SolidHeartIcon /> : <HeartIcon />}
      </ButtonIcon>
      <ButtonIcon variant={"primary"} onClick={() => bookmarkHandler(post.id)}>
        {post.isBookmarked ? <SolidBookmarkIcon /> : <BookmarkIcon />}
      </ButtonIcon>
    </div>
  );
}
