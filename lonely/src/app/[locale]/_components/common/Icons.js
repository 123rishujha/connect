import Image from "next/image";

export const Icons = {
  EyeIcon: ({ styleClasses = "", styles = {}, ...props }) => {
    return (
      <Image
        src={"/svgs/eye.svg"}
        alt="Eye Logo"
        width={24}
        height={24}
        // priority
        className={`text-primary-light ${styleClasses} hover:cursor-pointer`}
        style={{ ...styles }}
        {...props}
      />
    );
  },
};
