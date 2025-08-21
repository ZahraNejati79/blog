import React from "react";

function FileInput({ label, name, value, dir = "rtl", onChange, isRequired }) {
  return (
    <div className="">
      <label
        htmlFor={name}
        className="w-full flex items-center justify-center border border-primary-900 text-primary-900 p-2 rounded-lg cursor-pointer"
      >
        {label}
        {isRequired && <span className="text-error">*</span>}
      </label>
      <input
        type={"file"}
        name={name}
        id={name}
        dir={dir}
        className={`sr-only`}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default FileInput;
