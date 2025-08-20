"use client";
import RHFSelect from "@/ui/RHFSelect";
import RHFTextField from "@/ui/RHFTextField";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";

import * as yup from "yup";
import { useCategories } from "./useCategories";
import FileInput from "@/ui/FileInput";
import Image from "next/image";
import { TrashIcon } from "@heroicons/react/24/outline";

const schema = yup.object();
function PostForm({ options }) {
  const { categories } = useCategories(options);
  const {
    register,
    formState: { errors },
    control,
    reset,
    handleSubmit,
    setValue,
  } = useForm({ mode: "onTouched", resolver: schema });

  const [coverImageUrl, setCoverImageUrl] = useState(null);

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
      <div className="flex flex-col gap-4">
        <Controller
          render={({ field: { onChange, value, ...rest } }) => (
            <FileInput
              {...rest}
              name={"coverImage"}
              value={value?.fileName}
              label={"آپلود کاور پست"}
              onChange={(event) => {
                console.log("image", event.target);

                const file = event.target.files[0];
                onChange(file);
                setCoverImageUrl(URL.createObjectURL(file));
              }}
            />
          )}
          name="coverImage"
          control={control}
        />
        {coverImageUrl && (
          <div className="group relative aspect-video">
            <Image
              fill
              alt="cover-image"
              className="object-center object-center"
              src={coverImageUrl}
            />
            <div className="hidden group-hover:block absolute inset-0 bg-red-500/40 transition-all duration-200">
              <div className="flex items-center justify-center w-full h-full">
                <TrashIcon
                  onClick={() => {
                    setCoverImageUrl(null);
                    setValue("coverImage", null);
                  }}
                  className="w-20 cursor-pointer"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </form>
  );
}

export default PostForm;
