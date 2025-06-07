import { useContext } from "react";

import { Profile } from "@/utilities/constants";

import { ProfileContext } from "../provider/profile-provider";
import styles from "./about-me.module.css";

export const AboutMe = () => {
  const { aboutMe } = useContext(ProfileContext);
  const { aboutMeContainer, aboutMeTitle, aboutMeDesc } = styles;

  return (
    <div className={aboutMeContainer}>
      <h2 className={aboutMeTitle}>{Profile.ABOUT_ME}</h2>
      <p className={aboutMeDesc}>{aboutMe}</p>
    </div>
  );
};
