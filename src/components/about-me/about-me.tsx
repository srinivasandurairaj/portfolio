// import { useContext } from "react";

// import { ProfileContext } from "../provider/profile-provider";
import styles from "./about-me.module.css";
import { ProfileDescription } from "../profile-description";
import { Title } from "../title";
import { Experience } from "../experience";
// import { Stack } from "../stack";
import { SectionCards } from "../section-cards";

export const AboutMe = () => {
  // const { aboutMe } = useContext(ProfileContext);
  const { aboutMeContainer } = styles;

  return (
    <div className={aboutMeContainer}>
      <Title />
      <ProfileDescription />
      <Experience />
      <SectionCards />
      {/* <Stack /> */}
    </div>
  );
};
