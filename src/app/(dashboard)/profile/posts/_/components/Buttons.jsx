import ButtonIcon from "@/ui/ButtonIcon";
import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function CreatePost() {
  return (
    <Link href={`/profile/posts/create`}>
      <ButtonIcon className={"justify-self-end p-2"} variant={"primary"}>
        <PlusIcon className="text-primary-100" />
        <span>ایجاد پست</span>
      </ButtonIcon>
    </Link>
  );
}

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
