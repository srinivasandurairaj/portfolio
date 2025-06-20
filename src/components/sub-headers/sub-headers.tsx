import { ISubHeadersProps } from "./sub-headers.props";

import style from "./sub-headers.module.css";

export const SubHeaders = ({ title, subTitle }: ISubHeadersProps) => {
  const { subHeaderContainer, subHeaderTitle, subHeaderSubTitle } = style;
  return (
    <div className={subHeaderContainer}>
      <h1 className={subHeaderTitle}>{title}</h1>
      <h1 className={subHeaderSubTitle}>{subTitle}</h1>
    </div>
  );
};
