import { FunctionComponent } from "react";
import { IconProps } from "../interface/Icon";

export const Views: FunctionComponent<IconProps> = (props) => {
  const { selected } = props;
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      className={`${selected ? "text-primary" : "text-icon"} fill-current`}
    >
      <path d="M9.99861 3.77832C7.75436 3.77832 5.9573 4.80045 4.64908 6.01701C3.34919 7.22247 2.47982 8.66678 2.06874 9.65837C1.97709 9.87779 1.97709 10.1222 2.06874 10.3416C2.47982 11.3332 3.34919 12.7775 4.64908 13.983C5.9573 15.1996 7.75436 16.2217 9.99861 16.2217C12.2429 16.2217 14.0399 15.1996 15.3481 13.983C16.648 12.7748 17.5174 11.3332 17.9313 10.3416C18.0229 10.1222 18.0229 9.87779 17.9313 9.65837C17.5174 8.66678 16.648 7.22247 15.3481 6.01701C14.0399 4.80045 12.2429 3.77832 9.99861 3.77832ZM5.99896 10C5.99896 8.93923 6.42035 7.9219 7.17043 7.17182C7.92051 6.42174 8.93784 6.00035 9.99861 6.00035C11.0594 6.00035 12.0767 6.42174 12.8268 7.17182C13.5769 7.9219 13.9983 8.93923 13.9983 10C13.9983 11.0608 13.5769 12.0781 12.8268 12.8282C12.0767 13.5783 11.0594 13.9997 9.99861 13.9997C8.93784 13.9997 7.92051 13.5783 7.17043 12.8282C6.42035 12.0781 5.99896 11.0608 5.99896 10ZM9.99861 8.22238C9.99861 9.20285 9.20146 10 8.22099 10C8.02378 10 7.83491 9.96667 7.65715 9.90834C7.50438 9.85835 7.32662 9.95278 7.33218 10.1139C7.34051 10.3055 7.36828 10.4972 7.42106 10.6888C7.80158 12.1109 9.26534 12.9553 10.6874 12.5748C12.1095 12.1943 12.9539 10.7305 12.5734 9.3084C12.2651 8.15572 11.2457 7.38079 10.1125 7.33357C9.95139 7.32801 9.85696 7.503 9.90695 7.65854C9.96528 7.8363 9.99861 8.02517 9.99861 8.22238Z" />
    </svg>
  );
};