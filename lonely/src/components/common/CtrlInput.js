"use client";
import React from "react";

export const CtrlInput = {
  Normal: React.forwardRef((props, ref) => {
    return <MyInput {...props} ref={ref} />;
  }),
};

const MyInput = React.forwardRef((props, ref) => {
  const { formik, name, styleClasses, ...rest } = props;
  const { values, errors, touched, handleChange, handleBlur } = formik;
  return (
    <>
      <input
        name={name}
        value={values[`${name}`] ? values[`${name}`] : ""}
        onChange={(val) => {
          handleChange(val);
        }}
        onBlur={handleBlur}
        {...rest}
        className={`rounded p-1 focus:outline-primary-main ring-1 ring-border-lightgray ${styleClasses}`}
      />
      <p>{errors[`${name}`] && touched[`${name}`] ? errors[`${name}`] : ""}</p>
    </>
  );
});
