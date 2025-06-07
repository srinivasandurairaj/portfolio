import { useContext } from "react";

import { ProfileContext } from "../provider/profile-provider";
import styles from "./footer.module.css";

export const Footer = () => {
  const { footerContainer, footerText: footerTextStyles } = styles;
  const { footerCopyright, footerText } = useContext(ProfileContext);
  return (
    <div className={footerContainer}>
      <p className={footerTextStyles}>{footerText}</p>
      <p className={footerTextStyles}>{footerCopyright}</p>
    </div>
  );
};
