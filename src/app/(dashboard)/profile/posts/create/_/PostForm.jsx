"use client";
import RHFSelect from "@/ui/RHFSelect";
import RHFTextField from "@/ui/RHFTextField";
import React from "react";
import { useForm } from "react-hook-form";

import * as yup from "yup";
import { useCategories } from "./useCategories";

const schema = yup.object();
function PostForm({ options }) {
  const { categories } = useCategories(options);
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm({ mode: "onTouched", resolver: schema });

  return (
    <form className="form">
      <RHFTextField
        name="title"
        label={"عنوان"}
        errors={errors}
        register={register}
      />
      <RHFTextField
        name="briefText"
        label={"متن کوتاه"}
        errors={errors}
        register={register}
      />
      <RHFTextField
        name="slug"
        label={"اسلاگ"}
        errors={errors}
        register={register}
      />
      <RHFTextField
        name="readingTime"
        label={"زمان مطالعه"}
        errors={errors}
        register={register}
      />
      <RHFSelect
        name="categories"
        label={"دسته بندی"}
        errors={errors}
        register={register}
        options={categories}
      />
    </form>
  );
}

export default PostForm;
