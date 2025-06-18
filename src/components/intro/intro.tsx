import { AboutMe } from "../about-me";
import { ProfileCard } from "../profile-card/profile-card";
import styles from "./intro.module.css";

export const Intro = () => {
  const { introContainer, leftContainer, rightContainer } = styles;

  return (
    <div className={introContainer}>
      <div className={polygon} />
      <div className={leftContainer}>
        <ProfileCard />
      </div>
      <div className={rightContainer}>
        <AboutMe />
      </div>
      <div className={rightContainer}></div>
    </div>
  );
};
