import RHFSelect from "@/ui/RHFSelect";
import RHFTextField from "@/ui/RHFTextField";
import React from "react";
import { useForm } from "react-hook-form";

function PostForm() {
  const {
    register,
    formState: { errors },
  } = useForm();
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
        options={[
          {
            label: "عنوانش",
            value: "value1",
          },
        ]}
      />
    </form>
  );
}

export default PostForm;
