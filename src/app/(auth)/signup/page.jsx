"use client";
import Button from "@/ui/Button";
import RHFTextField from "@/ui/RHFTextField";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

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

  const onSubmit = (values) => {
    console.log("====================================");
    console.log(values);
    console.log("====================================");
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
        />
        <RHFTextField
          label={"رمز عبور"}
          name={"password"}
          register={register}
          isRequired
          errors={errors}
        />
        <Button type="submit" variant="primary" className="w-full">
          تایید
        </Button>
      </form>
    </div>
  );
}
