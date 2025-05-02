"use client";
import Button from "@/ui/Button";
import RHFTextField from "@/ui/RHFTextField";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupApi } from "@/services/authApiService";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const schema = yup
  .object({
    name: yup
      .string()
      .min(5, "حداقل 5 کاراکتر!")
      .max(30, "حداکثر 30 کاراکتر!")
      .required("نام الزامی است!"),
    email: yup.string().email("ایمیل نا معتبر!").required("ایمیل اجباری است!"),
    password: yup.string().required("رمز عبور الزامی است!"),
  })
  .required();

export default function Signup() {
  const {
    handleSubmit,
    register,
    formState: { errors, isLoading },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const router = useRouter();

  const onSubmit = async (values) => {
    try {
      const { message } = await signupApi(values);
      toast.success(message);
      router.push("/profile");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div>
      <h2>ثبت نام</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        <RHFTextField
          label={"نام و نام خانوادگی"}
          name={"name"}
          register={register}
          isRequired
          errors={errors}
        />
        <RHFTextField
          label={"ایمیل"}
          name={"email"}
          register={register}
          isRequired
          errors={errors}
          dir="ltr"
        />
        <RHFTextField
          label={"رمز عبور"}
          name={"password"}
          register={register}
          isRequired
          errors={errors}
          dir="ltr"
        />
        <Button type="submit" variant="primary" className="w-full">
          تایید
        </Button>
      </form>
    </div>
  );
}
