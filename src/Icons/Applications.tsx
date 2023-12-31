import { FunctionComponent } from "react";
import { IconProps } from "../interface/Icon";

export const Applications: FunctionComponent<IconProps> = (props) => {
  const { selected } = props;
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      className={`${selected ? "text-primary" : "text-icon"} fill-current`}
    >
      <path
        d="M2 4.28571C2 3.025 3.025 2 4.28571 2H15.7143C16.975 2 18 3.025 18 4.28571V15.7143C18 16.975 16.975 18 15.7143 18H4.28571C3.025 18 2 16.975 2 15.7143V4.28571ZM4.51071 6.27857C4.18929 6.62857 4.21429 7.17143 4.56429 7.48929L7.30357 10L4.56429 12.5107C4.21429 12.8321 4.19286 13.3714 4.51071 13.7214C4.82857 14.0714 5.37143 14.0929 5.72143 13.775L9.15 10.6321C9.32857 10.4714 9.42857 10.2393 9.42857 10C9.42857 9.76071 9.32857 9.53214 9.15 9.36786L5.72143 6.225C5.37143 5.90357 4.82857 5.92857 4.51071 6.27857ZM9.71429 12.8571C9.23929 12.8571 8.85714 13.2393 8.85714 13.7143C8.85714 14.1893 9.23929 14.5714 9.71429 14.5714H14.8571C15.3321 14.5714 15.7143 14.1893 15.7143 13.7143C15.7143 13.2393 15.3321 12.8571 14.8571 12.8571H9.71429Z"
        className="text-icon fill-current"
      />
    </svg>
  );
};
