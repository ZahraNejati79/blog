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
      className={`flex items-center justify-center gap-x-4 py-4 w-full ${className}`}
    >
      {children}
      {pending && <SpinnerMini />}
    </Button>
  );
}

export default SubmitButton;
