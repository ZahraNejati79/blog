"use client";

import { createComment } from "@/lib/actions";
import SubmitButton from "@/ui/SubmitButton";
import TextArea from "@/ui/TextArea";
import React, { useActionState, useEffect, useState } from "react";
import toast from "react-hot-toast";

function CommentForm({ postId, parentId, onClose }) {
  const initialState = {
    message: "",
    error: "",
  };
  const [text, setText] = useState("");
  //   const createCommentWithData = createComment.bind(null, postId, parentId);

  const [state, formAction] = useActionState(createComment, initialState);

  useEffect(() => {
    if (state?.message) {
      toast.success(state.message);
      onClose();
    }
    if (state?.error) {
      toast.error(state.error);
    }
  }, [state]);

  return (
    <div>
      <div className="flex justify-center mt-4">
        <div className="max-w-md  w-full">
          <form
            //    action={createCommentWithData}
            action={async (formData) => {
              await formAction({ formData, postId, parentId });
            }}
            className="space-y-7"
          >
            <TextArea
              name="text"
              label="متن نظر"
              value={text}
              isRequired
              onChange={(e) => setText(e.target.value)}
            />
            <div className="mt-8">
              <SubmitButton>تایید</SubmitButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CommentForm;
