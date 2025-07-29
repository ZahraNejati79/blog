import React from "react";
import Button from "./Button";
import { useFormStatus } from "react-dom";
import SpinnerMini from "./SpinnerMini";

function SubmitButton({ children, className, ...rest }) {
  const { pending } = useFormStatus();
  return (
    <Button
      {...rest}
      disabled={pending}
      className={`flex items-center justify-center gap-x-4py-4 ${className}`}
    >
      {children}
      {pending && <SpinnerMini />}
    </Button>
  );
}

export default SubmitButton;
