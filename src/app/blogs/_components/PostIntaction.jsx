import ButtonIcon from "@/ui/ButtonIcon";
import {
  BookmarkIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

export default function PostIntaction({ post }) {
  return (
    <div className="flex items-center gap-x-4">
      <ButtonIcon variant={"secondary"}>
        <ChatBubbleOvalLeftEllipsisIcon />
        <div>{post.commentsCount}</div>
      </ButtonIcon>
      <ButtonIcon variant={"red"}>
        <HeartIcon />
      </ButtonIcon>
      <ButtonIcon variant={"primary"}>
        <BookmarkIcon />
      </ButtonIcon>
    </div>
  );
}
