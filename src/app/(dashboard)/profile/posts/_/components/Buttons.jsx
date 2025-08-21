"use client";
import ButtonIcon from "@/ui/ButtonIcon";
import ConfirmDelete from "@/ui/ConfirmDelete";
import Modal from "@/ui/Modal";
import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useDeletePost from "../useDeletePost";

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

export function DeletePost({ post: { _id: postId, title } }) {
  const [isOpen, setIsOpen] = useState(false);
  const { deletePost, isPending } = useDeletePost();
  const router = useRouter();
  return (
    <>
      <ButtonIcon variant={"outline"} onClick={() => setIsOpen(true)}>
        <TrashIcon className="text-error" />
      </ButtonIcon>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        title={`حذف پست ${title}`}
      >
        <ConfirmDelete
          resourceName={title}
          onClose={() => setIsOpen(false)}
          onConfirm={(e) => {
            e.preventDefault();
            setIsOpen(false);
            deletePost(postId, {
              onSuccess: () => {
                router.refresh("/profile/posts/");
              },
            });
          }}
        />
      </Modal>
    </>
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
