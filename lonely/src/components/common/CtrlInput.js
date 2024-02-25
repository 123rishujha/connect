"use client";
import React, { useState } from "react";
import { Icons } from "./Icons";

export const CtrlInput = {
  Normal: React.forwardRef((props, ref) => {
    return <NormalInput {...props} ref={ref} />;
  }),
  Password: React.forwardRef((props, ref) => {
    return <PasswordInput {...props} ref={ref} />;
  }),
};

const NormalInput = React.forwardRef((props, ref) => {
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
        className={`w-full rounded p-1 focus:outline-primary-main ring-1 ring-border-lightgray ${styleClasses}`}
      />
      <p className="text-red-500 text-xs">
        {errors[`${name}`] && touched[`${name}`] ? errors[`${name}`] : ""}
      </p>
    </>
  );
});

const PasswordInput = React.forwardRef((props, ref) => {
  const { formik, name, styleClasses, ...rest } = props;
  const { values, errors, touched, handleChange, handleBlur } = formik;
  const [viewPass, setViewPass] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center relative">
        <input
          type={viewPass ? "text" : "password"}
          name={name}
          value={values[`${name}`] ? values[`${name}`] : ""}
          onChange={(val) => {
            handleChange(val);
          }}
          onBlur={handleBlur}
          {...rest}
          className={`w-full rounded p-1 focus:outline-primary-main ring-1 ring-border-lightgray ${styleClasses}`}
        />
        <Icons.EyeIcon
          styleClasses="absolute right-1"
          onClick={() => setViewPass(!viewPass)}
        />
      </div>
      <p className="text-red-500 text-xs">
        {errors[`${name}`] && touched[`${name}`] ? errors[`${name}`] : ""}
      </p>
    </>
  );
});
