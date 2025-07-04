import { useContext } from "react";

import { ProfileContext } from "@/components/provider/profile-provider";

import styles from "./profile-card.module.css";

export const ShortIntro = () => {
  const { shortIntro: shortIntroStyles } = styles;

  const { shortIntro } = useContext(ProfileContext);

  return (
    <div>
      <p className={shortIntroStyles}>{shortIntro}</p>
    </div>
  );
};
