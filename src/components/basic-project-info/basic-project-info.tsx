import { LocationIcon } from "../logo";
import { IBasicProjectInfoProps } from "./basic-project-info.props";
import styles from "./basic-project-info.module.css";

export const BasicProjectInfo = ({
  location,
  organisation,
  period,
  role,
}: IBasicProjectInfoProps) => {
  const {
    location: locationStyles,
    orgainizationBox,
    role: roleStyles,
    noMarginBottom,
  } = styles;
  return (
    <>
      <div>
        <LocationIcon />
        <span className={locationStyles}>{location}</span>
      </div>
      <div className={orgainizationBox}>
        <p className={noMarginBottom}>{organisation}</p>
        <p>{period}</p>
      </div>
      <span className={roleStyles}>{role}</span>
    </>
  );
};
