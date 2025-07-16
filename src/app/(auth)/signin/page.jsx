"use client";
import { useAuth } from "@/context/AuthContext";
import { signinApi } from "@/services/authApiService";
import Button from "@/ui/Button";
import RHFTextField from "@/ui/RHFTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email("ایمیل نا معتیر!").required("ایمیل الزامی است!"),
  password: yup.string().required("رمز عبور الزامی است!"),
});

export default function page() {
  const {
    handleSubmit,
    register,
    formState: { errors, isLoading },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const { signin } = useAuth();
  const onSubmit = async (values) => {
    await signin(values);
  };

  return (
    <div>
      {" "}
      <h2>ورود</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        <RHFTextField
          register={register}
          name={"email"}
          label={"ایمیل"}
          isRequired
          errors={errors}
          dir="lrt"
        />
        <RHFTextField
          register={register}
          name={"password"}
          label={"رمز عبور"}
          isRequired
          errors={errors}
          dir="lrt"
        />
        <Button type="submit" variant="primary" className="w-full">
          ورود
        </Button>
        <Link href={"/signup"} className="text-secondary-500 mt-6 text-center">
          ثبت نام
        </Link>
      </form>
    </div>
  );
}
