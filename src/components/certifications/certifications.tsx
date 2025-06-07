import { useContext } from "react";

import { Profile } from "@/utilities/constants";

import { ProfileContext } from "../provider/profile-provider";
import styles from "./certification.module.css";

export const Certifications = () => {
  const {
    certificationsContainer,
    certificationsTitle,
    certification: certificationStyles,
    issuer,
    certificationsBox,
  } = styles;
  const { certifications } = useContext(ProfileContext);

  return (
    <div className={certificationsContainer}>
      <h2 className={certificationsTitle}>{Profile.CERTIFICATIONS}</h2>
      {certifications.map((certification) => (
        <div key={certification.name} className={certificationsBox}>
          <h3 className={certificationStyles}>{certification.name}</h3>
          <p className={issuer}>{`Issued by ${certification.issuer}`}</p>
        </div>
      ))}
    </div>
  );
};
