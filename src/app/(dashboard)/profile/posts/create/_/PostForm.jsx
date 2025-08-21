"use client";
import RHFSelect from "@/ui/RHFSelect";
import RHFTextField from "@/ui/RHFTextField";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { useCategories } from "./useCategories";
import FileInput from "@/ui/FileInput";
import Image from "next/image";
import { TrashIcon } from "@heroicons/react/24/outline";
import Button from "@/ui/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCreatePost } from "./useCreatePost";
import { useRouter } from "next/navigation";
import { useEditPost } from "./useEditPost";
import SpinnerMini from "@/ui/SpinnerMini";

const schema = yup
  .object({
    title: yup
      .string()
      .min(5, "حداقل ۵ کاراکتر را وارد کنید")
      .required("عنوان ضروری است"),
    briefText: yup
      .string()
      .min(5, "حداقل ۱۰ کاراکتر را وارد کنید")
      .required("توضیحات ضروری است"),
    text: yup
      .string()
      .min(5, "حداقل ۱۰ کاراکتر را وارد کنید")
      .required("توضیحات ضروری است"),
    slug: yup.string().required("اسلاگ ضروری است"),
    readingTime: yup
      .number()
      .positive()
      .integer()
      .required("زمان مطالعه ضروری است")
      .typeError("یک عدد را وارد کنید"),
    category: yup.string().required("دسته بندی ضروری است"),
  })
  .required();

function PostForm({ options, postToEdit = {} }) {
  //edit
  const { _id: editId } = postToEdit;
  const isEditSessions = !!editId;
  const {
    title,
    readingTime,
    category,
    slug,
    text,
    briefText,
    coverImage,
    coverImageUrl: prevCoverImageUrl,
  } = postToEdit;
  let editValue = {};
  if (isEditSessions) {
    editValue = {
      title,
      readingTime,
      category: category._id,
      slug,
      text,
      briefText,
      coverImage,
    };
  }

  const { isPending: isEditing, editPost } = useEditPost();
  const { categories } = useCategories(options);
  const [coverImageUrl, setCoverImageUrl] = useState(prevCoverImageUrl || null);
  const { isPending: isCreating, createPost } = useCreatePost();
  const router = useRouter();

  const {
    register,
    formState: { errors },
    control,
    reset,
    handleSubmit,
    setValue,
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
    defaultValues: isEditSessions ? editValue : null,
  });

  useEffect(() => {
    if (isEditSessions) {
      async function fetchMyApi() {
        const file = await imageUrlToFile(prevCoverImageUrl);
        setValue("coverImage", file);
      }
      fetchMyApi();
    }
  }, [editId]);

  const onSubmit = async (data) => {
    let form_data = new FormData();

    for (let key in data) {
      form_data.append(key, data[key]);
    }

    if (isEditSessions) {
      editPost(
        { data: form_data, id: editId },
        {
          onSuccess: () => {
            reset();
            router.push("/profile/posts/");
          },
        }
      );
    } else {
      createPost(form_data, {
        onSuccess: () => {
          router.push("/profile/posts/");
        },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <RHFTextField
        name="title"
        label={"عنوان"}
        errors={errors}
        register={register}
        required
      />
      <RHFTextField
        name="briefText"
        label={"متن کوتاه"}
        errors={errors}
        register={register}
        required
      />
      <RHFTextField
        name="text"
        label={"متن"}
        errors={errors}
        register={register}
        required
      />
      <RHFTextField
        name="slug"
        label={"اسلاگ"}
        errors={errors}
        register={register}
        required
      />
      <RHFTextField
        name="readingTime"
        label={"زمان مطالعه"}
        errors={errors}
        register={register}
        required
      />
      <RHFSelect
        name="category"
        label={"دسته بندی"}
        errors={errors}
        register={register}
        required
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
      {isCreating || isEditing ? (
        <SpinnerMini />
      ) : (
        <Button variant="primary" type="submit" className="w-full">
          تایید
        </Button>
      )}
    </form>
  );
}

export default PostForm;
