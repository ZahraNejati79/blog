"use client";

import { createComment } from "@/lib/actions";
import Button from "@/ui/Button";
import TextArea from "@/ui/TextArea";
import React, { useState } from "react";

function CommentForm({ postId, parentId }) {
  const [text, setText] = useState("");

  const createCommentWithData = createComment.bind(null, postId, parentId);
  return (
    <div>
      <div className="flex justify-center mt-4">
        <div className="max-w-md  w-full">
          <form action={createCommentWithData} className="space-y-7">
            <TextArea
              name="text"
              label="متن نظر"
              value={text}
              isRequired
              onChange={(e) => setText(e.target.value)}
            />
            <div className="mt-8">
              <Button>ثبت</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CommentForm;
