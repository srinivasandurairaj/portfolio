import { useContext } from "react";

import { ProfileContext } from "@/components/provider/profile-provider";

import styles from "./profile-description.module.css";

export const ProfileDescription = () => {
  const { profileDescription } = styles;

  const { briefIntro } = useContext(ProfileContext);

  return (
    <div>
      <p className={profileDescription}>{briefIntro}</p>
    </div>
  );
};
