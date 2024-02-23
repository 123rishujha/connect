const buttonVariants = {
  contained: "bg-primary-main text-text-white hover:bg-primary-dark",
  outlined: "border border-primary-main text-primary-main",
};

export const MyButton = ({
  variant = "contained",
  styleClasses = "",
  styles = {},
  ...props
}) => {
  const btnStyles = {
    minWidth: "130px",
    height: "35px",
    ...styles,
  };
  return (
    <button
      className={`rounded px-2 py-1 ${buttonVariants[variant]} ${props.styleClasses}`}
      style={btnStyles}
      {...props}
    >
      {props.children}
    </button>
  );
};
