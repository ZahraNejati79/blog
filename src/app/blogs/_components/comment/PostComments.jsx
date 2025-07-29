"use client";
import Button from "@/ui/Button";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import Comment from "./Comment";
import classNames from "classnames";
import Modal from "@/ui/Modal";

export default function PostComments({ post: { comments, _id: postId } }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-10">
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={"کامنت"}
        description="توضیحات کامنت"
      >
        <div>children</div>
      </Modal>
      <div className="flex flex-col items-center lg:flex-row justify-between gap-y-3 mb-8">
        <h2 className="text-2xl font-bold text-secondary-800">نظرات</h2>
        <Button
          onClick={() => setOpen(true)}
          variant="outline"
          className="flex items-center py-2"
        >
          <QuestionMarkCircleIcon className="w-4 ml-2" />
          <span>ثبت نظر جدید</span>
        </Button>
      </div>
      <div className="space-y-8 post-comments bg-secondary-0 rounded-xl py-6 px-3 lg:px-6 ">
        {comments.length > 0 ? (
          comments.map((comment) => {
            return (
              <div key={comment.postId}>
                <div className="border border-secondary-200 rounded-xl p-2 sm:p-4 mb-3">
                  <Comment comment={comment} />
                </div>
                <div className="post-comments__answer mr-2 sm:mr-8 space-y-3">
                  {comment.answers.map((item, index) => {
                    return (
                      <div key={item.postId} className="relative">
                        <div
                          className={classNames(
                            "answer-item border border-secondary-100 bg-secondary-50/80 rounded-xl p-2 sm:p-4",
                            {
                              "last-item": index + 1 === comment.answers.length,
                            }
                          )}
                        >
                          <Comment comment={item} key={item.postId} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-secondary-500">برای این پست نظری ثبت نشده است</p>
        )}
      </div>
    </div>
  );
}
