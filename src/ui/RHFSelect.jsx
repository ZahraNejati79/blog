import React from "react";

function RHFSelect({
  label,
  options,
  name,
  dir = "rtl",
  register,
  errors,
  isRequired,
  ...res
}) {
  const errorMessages = errors?.[name];
  const hasError = !!(errors && errorMessages);
  console.log("options", options);

  return (
    <div
      className={`textField relative ${hasError ? "textField--invalid" : ""}`}
    >
      <label htmlFor={name} className="mb-2 block text-secondary-700">
        {label}
        {isRequired && <span className="text-error">*</span>}
      </label>
      <select
        autoComplete="off"
        id={name}
        dir={dir}
        className={`textField__input  ${
          dir === "ltr" ? "text-left" : "text-right"
        }`}
        {...register(name)}
        {...res}
      >
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      {errors && errors[name] && (
        <span className="text-red-600 block text-xs mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default RHFSelect;
