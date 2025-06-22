import styles from "./about-me.module.css";
import { ProfileDescription } from "../profile-description";
import { Title } from "../title";
import { Experience } from "../experience";
import { SectionCards } from "../section-cards";

export const AboutMe = () => {
  const { aboutMeContainer } = styles;

  return (
    <div className={aboutMeContainer}>
      <Title />
      <ProfileDescription />
      <Experience />
      <SectionCards />
    </div>
  );
};
