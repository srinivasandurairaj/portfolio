"use client";

// import { AboutMe } from "../about-me";
import { ProfilePic } from "../profile-pic/profile-pic";
import styles from "./intro.module.css";

export const Intro = () => {
  const { polygon, introContainer, leftContainer, rightContainer } = styles;

  return (
    <div className={introContainer}>
      <div className={polygon} />
      <div className={leftContainer}>
        <ProfilePic />
      </div>
      <div className={rightContainer}></div>
    </div>
  );
};
