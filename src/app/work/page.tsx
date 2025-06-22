import NextLink from "next/link";

import { ProfileCard } from "@/components/profile-card/profile-card";
import { WorkTimeline } from "@/components/work-timeline/work-timeline";

import styles from "./page.module.css";
import { HomeIcon } from "@/components/logo/home-icon";
import { SkillIcon } from "@/components/logo/skill-icon";

const Work = () => {
  const {
    container,
    profileCardContainer,
    timelineContainer,
    homeButtonBox,
    homeButton,
    skillButtonBox,
  } = styles;

  return (
    <div className={container}>
      <div className={profileCardContainer}>
        <ProfileCard />
      </div>
      <div className={timelineContainer}>
        <WorkTimeline />
      </div>
      <div className={homeButtonBox}>
        <NextLink href="/">
          <button className={homeButton}>
            <HomeIcon iconColor="#ffffff" size={30} />
          </button>
        </NextLink>
      </div>

      <div className={skillButtonBox}>
        <NextLink href="/skill">
          <button className={homeButton}>
            <SkillIcon iconColor="#ffffff" size={30} />
          </button>
        </NextLink>
      </div>
    </div>
  );
};

export default Work;
