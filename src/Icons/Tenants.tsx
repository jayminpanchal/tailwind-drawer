import { FunctionComponent } from "react";
import { IconProps } from "../interface/Icon";

export const Tenants: FunctionComponent<IconProps> = (props) => {
  const { selected } = props;
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${selected ? "text-primary" : "text-icon"} fill-current`}
    >
      <path d="M17 4.5V6C17 7.38125 13.8656 8.5 10 8.5C6.13437 8.5 3 7.38125 3 6V4.5C3 3.11875 6.13437 2 10 2C13.8656 2 17 3.11875 17 4.5ZM15.2875 8.70937C15.9375 8.47812 16.5344 8.18125 17 7.81563V11C17 12.3813 13.8656 13.5 10 13.5C6.13437 13.5 3 12.3813 3 11V7.81563C3.46562 8.18437 4.0625 8.47812 4.7125 8.70937C6.11562 9.20937 7.98437 9.5 10 9.5C12.0156 9.5 13.8844 9.20937 15.2875 8.70937ZM3 12.8156C3.46562 13.1844 4.0625 13.4781 4.7125 13.7094C6.11562 14.2094 7.98437 14.5 10 14.5C12.0156 14.5 13.8844 14.2094 15.2875 13.7094C15.9375 13.4781 16.5344 13.1812 17 12.8156V15.5C17 16.8812 13.8656 18 10 18C6.13437 18 3 16.8812 3 15.5V12.8156Z" />
    </svg>
  );
};
