import ButtonIcon from "@/ui/ButtonIcon";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function DeletePost({ postId }) {
  return (
    <ButtonIcon
      variant={"outline"}
      onClick={() => console.log("postId", postId)}
    >
      <TrashIcon className="text-error" />
    </ButtonIcon>
  );
}

export function UpdatePost({ postId }) {
  return (
    <Link href={`/profile/posts/${postId}/edit`}>
      <ButtonIcon variant={"outline"}>
        <PencilIcon className="text-primary-100" />
      </ButtonIcon>
    </Link>
  );
}
