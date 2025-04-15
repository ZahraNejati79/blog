const btnType = {
  primary: "btn--primary",
  secondary: "btn--secondary",
  outline: "btn--outline",
  danger: "btn--danger",
};

export default function Button({
  onClick,
  children,
  className,
  variant = "primary",
  ...res
}) {
  return (
    <button
      onClick={onClick}
      className={`btn ${btnType[variant]} ${className}`}
      {...res}
    >
      {children}
    </button>
  );
}
